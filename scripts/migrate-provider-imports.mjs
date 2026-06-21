#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const oldImportPrefix = "@cognidesk/integrations/";
const sourceExtensions = new Set([".cjs", ".cts", ".js", ".jsx", ".mjs", ".mts", ".ts", ".tsx"]);
const skippedDirs = new Set([".git", ".next", "build", "coverage", "dist", "node_modules"]);
const providerCategorySegments = new Set([
  "cobrowsing",
  "community",
  "contact-center",
  "ecommerce",
  "email",
  "form",
  "help-center",
  "marketplace",
  "messaging",
  "review",
  "sms",
  "social",
  "ticketing",
  "video",
  "voice",
  "workplace",
]);

export function transformProviderImports(sourceText, options = {}) {
  const fileName = options.fileName ?? "source.ts";
  const sourceFile = ts.createSourceFile(
    fileName,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    scriptKindForPath(fileName),
  );
  const replacements = [];
  const diagnostics = [];

  for (const statement of sourceFile.statements) {
    if (ts.isImportDeclaration(statement)) {
      const rewrite = rewriteImportDeclaration(statement, sourceFile, sourceText);
      collectRewrite(rewrite, replacements, diagnostics);
      continue;
    }

    if (ts.isExportDeclaration(statement) && statement.moduleSpecifier) {
      const rewrite = rewriteExportDeclaration(statement, sourceFile, sourceText);
      collectRewrite(rewrite, replacements, diagnostics);
    }
  }

  if (diagnostics.length > 0) {
    return { changed: false, diagnostics, sourceText };
  }

  if (replacements.length === 0) {
    return { changed: false, diagnostics: [], sourceText };
  }

  const nextSourceText = applyReplacements(sourceText, replacements);
  return {
    changed: nextSourceText !== sourceText,
    diagnostics: [],
    sourceText: nextSourceText,
  };
}

function collectRewrite(rewrite, replacements, diagnostics) {
  if (!rewrite) return;
  if (rewrite.diagnostic) {
    diagnostics.push(rewrite.diagnostic);
    return;
  }
  if (rewrite.replacement) replacements.push(rewrite.replacement);
}

function rewriteImportDeclaration(node, sourceFile, sourceText) {
  const specifier = stringLiteralValue(node.moduleSpecifier);
  const target = providerImportTarget(specifier);
  if (!target) return undefined;
  if (target.diagnosticMessage) return diagnosticForNode(sourceFile, node.moduleSpecifier, target.diagnosticMessage);

  const quote = quoteForNode(node.moduleSpecifier, sourceText);
  const importClause = node.importClause;
  if (!importClause) {
    return diagnosticForNode(sourceFile, node, "Side-effect provider imports cannot be migrated safely; add explicit manifest/runtime imports.");
  }

  if (importClause.name) {
    return diagnosticForNode(sourceFile, importClause.name, `Default import from '${specifier}' cannot be migrated safely.`);
  }

  if (!importClause.namedBindings || !ts.isNamedImports(importClause.namedBindings)) {
    return diagnosticForNode(sourceFile, importClause, `Namespace import from '${specifier}' cannot be migrated safely.`);
  }

  const grouped = groupSpecifiers(importClause.namedBindings.elements, importClause.isTypeOnly, target);
  if (grouped.diagnostic) return diagnosticForNode(sourceFile, grouped.diagnostic.node, grouped.diagnostic.message);

  if (grouped.manifest.length > 0 && grouped.runtime.length > 0) {
    const replacementText = [
      renderImportDeclaration(grouped.manifest, target.manifestImport, quote, importClause.isTypeOnly),
      renderImportDeclaration(grouped.runtime, target.runtimeImport, quote, importClause.isTypeOnly),
    ].join("\n");
    return replaceStatement(node, sourceFile, replacementText);
  }

  const nextSpecifier = grouped.manifest.length > 0 ? target.manifestImport : target.runtimeImport;
  return replaceModuleSpecifier(node.moduleSpecifier, sourceText, nextSpecifier);
}

function rewriteExportDeclaration(node, sourceFile, sourceText) {
  const specifier = stringLiteralValue(node.moduleSpecifier);
  const target = providerImportTarget(specifier);
  if (!target) return undefined;
  if (target.diagnosticMessage) return diagnosticForNode(sourceFile, node.moduleSpecifier, target.diagnosticMessage);

  const quote = quoteForNode(node.moduleSpecifier, sourceText);
  if (!node.exportClause || !ts.isNamedExports(node.exportClause)) {
    return diagnosticForNode(sourceFile, node, `Star re-export from '${specifier}' cannot be migrated safely.`);
  }

  const grouped = groupSpecifiers(node.exportClause.elements, node.isTypeOnly, target);
  if (grouped.diagnostic) return diagnosticForNode(sourceFile, grouped.diagnostic.node, grouped.diagnostic.message);

  if (grouped.manifest.length > 0 && grouped.runtime.length > 0) {
    const replacementText = [
      renderExportDeclaration(grouped.manifest, target.manifestImport, quote, node.isTypeOnly),
      renderExportDeclaration(grouped.runtime, target.runtimeImport, quote, node.isTypeOnly),
    ].join("\n");
    return replaceStatement(node, sourceFile, replacementText);
  }

  const nextSpecifier = grouped.manifest.length > 0 ? target.manifestImport : target.runtimeImport;
  return replaceModuleSpecifier(node.moduleSpecifier, sourceText, nextSpecifier);
}

function groupSpecifiers(elements, declarationIsTypeOnly, importTarget) {
  const grouped = {
    manifest: [],
    runtime: [],
    diagnostic: undefined,
  };

  for (const element of elements) {
    const importedName = (element.propertyName ?? element.name).text;
    const removedSymbolDiagnostic = removedGmailGeneratedSymbolDiagnostic(importedName, importTarget);
    if (removedSymbolDiagnostic) {
      grouped.diagnostic = {
        node: element,
        message: removedSymbolDiagnostic,
      };
      return grouped;
    }

    const target = classifyProviderSymbol(importedName);
    if (!target) {
      grouped.diagnostic = {
        node: element,
        message: `Cannot classify provider import '${importedName}' as manifest or runtime. Split or migrate it manually.`,
      };
      return grouped;
    }

    grouped[target].push(renderNamedSpecifier(element, declarationIsTypeOnly));
  }

  return grouped;
}

function removedGmailGeneratedSymbolDiagnostic(name, importTarget) {
  if (importTarget.category !== "email" || importTarget.provider !== "gmail") return undefined;
  if (!isGmailGeneratedFullApiSymbol(name)) return undefined;

  return `Legacy Gmail generated/full-API symbol '${name}' was removed and is not exported by '${importTarget.runtimeImport}'. Migrate this import manually to the GmailEmailClient.rawClient surface.`;
}

function isGmailGeneratedFullApiSymbol(name) {
  const normalized = name.toLowerCase();
  const compact = normalized.replace(/[_-]/g, "");
  return (
    normalized.startsWith("gmail_full_api_")
    || compact.includes("gmailfullapi")
    || (compact.includes("gmailgenerated") && compact.includes("operation"))
  );
}

export function classifyProviderSymbol(name) {
  const normalized = name.toLowerCase();
  const compact = normalized.replace(/[_-]/g, "");
  if (normalized === "manifest" || normalized.endsWith("manifest") || normalized.includes("providermanifest")) {
    return "manifest";
  }

  if (
    normalized.startsWith("create")
    || normalized.startsWith("parse")
    || normalized.startsWith("verify")
    || normalized.startsWith("validate")
    || normalized.startsWith("build")
    || normalized.startsWith("map")
    || normalized.startsWith("normalize")
    || normalized.startsWith("serialize")
    || normalized.startsWith("deserialize")
    || normalized.startsWith("sign")
    || normalized.startsWith("refresh")
    || normalized.startsWith("list")
    || normalized.startsWith("read")
    || normalized.startsWith("send")
    || normalized.startsWith("update")
    || normalized.startsWith("delete")
    || normalized.startsWith("archive")
    || normalized.includes("client")
    || normalized.includes("runtime")
    || normalized.includes("webhook")
    || normalized.includes("readiness")
    || normalized.includes("credential")
    || normalized.includes("operation")
    || normalized.includes("options")
    || normalized.includes("configuration")
    || normalized.includes("config")
    || normalized.includes("query")
    || normalized.includes("payload")
    || normalized.includes("event")
    || normalized.includes("request")
    || normalized.includes("response")
    || normalized.includes("extension")
    || normalized.includes("error")
    || normalized.includes("status")
    || normalized.includes("mapper")
    || compact.includes("api")
    || compact.includes("fullapi")
    || compact.includes("generated")
    || compact.includes("schema")
    || compact.includes("spec")
    || compact.includes("function")
    || compact.includes("contract")
  ) {
    return "runtime";
  }

  return undefined;
}

function renderNamedSpecifier(element, declarationIsTypeOnly) {
  const isTypeOnly = !declarationIsTypeOnly && element.isTypeOnly;
  const typePrefix = isTypeOnly ? "type " : "";
  const name = element.name.text;
  const propertyName = element.propertyName?.text;
  if (propertyName) return `${typePrefix}${propertyName} as ${name}`;
  return `${typePrefix}${name}`;
}

function renderImportDeclaration(specifiers, moduleSpecifier, quote, isTypeOnly) {
  const typeKeyword = isTypeOnly ? " type" : "";
  return `import${typeKeyword} { ${specifiers.join(", ")} } from ${quote}${moduleSpecifier}${quote};`;
}

function renderExportDeclaration(specifiers, moduleSpecifier, quote, isTypeOnly) {
  const typeKeyword = isTypeOnly ? " type" : "";
  return `export${typeKeyword} { ${specifiers.join(", ")} } from ${quote}${moduleSpecifier}${quote};`;
}

function providerImportTarget(specifier) {
  if (typeof specifier !== "string" || !specifier.startsWith(oldImportPrefix)) return undefined;
  const suffix = specifier.slice(oldImportPrefix.length);
  const [category, provider, ...rest] = suffix.split("/");
  if (!category || !provider || rest.length > 0) {
    return {
      diagnosticMessage: `Unsupported legacy provider import '${specifier}'. Expected @cognidesk/integrations/{category}/{provider}.`,
    };
  }
  if (!providerCategorySegments.has(category)) {
    return {
      diagnosticMessage: `Unknown provider category '${category}' in legacy import '${specifier}'.`,
    };
  }

  const packageName = `@cognidesk/integration-${category}-${provider}`;
  return {
    category,
    packageName,
    provider,
    manifestImport: `${packageName}/manifest`,
    runtimeImport: `${packageName}/runtime`,
  };
}

function replaceStatement(node, sourceFile, text) {
  return {
    replacement: {
      start: node.getStart(sourceFile),
      end: node.end,
      text,
    },
  };
}

function replaceModuleSpecifier(moduleSpecifier, sourceText, nextSpecifier) {
  const quote = quoteForNode(moduleSpecifier, sourceText);
  return {
    replacement: {
      start: moduleSpecifier.getStart() + 1,
      end: moduleSpecifier.getEnd() - 1,
      text: nextSpecifier,
    },
    quote,
  };
}

function diagnosticForNode(sourceFile, node, message) {
  const position = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
  return {
    diagnostic: {
      fileName: sourceFile.fileName,
      line: position.line + 1,
      column: position.character + 1,
      message,
    },
  };
}

function applyReplacements(sourceText, replacements) {
  let nextSourceText = sourceText;
  for (const replacement of [...replacements].sort((left, right) => right.start - left.start)) {
    nextSourceText = `${nextSourceText.slice(0, replacement.start)}${replacement.text}${nextSourceText.slice(replacement.end)}`;
  }
  return nextSourceText;
}

function stringLiteralValue(node) {
  return ts.isStringLiteral(node) ? node.text : undefined;
}

function quoteForNode(node, sourceText) {
  return sourceText[node.getStart()] === "'" ? "'" : "\"";
}

function scriptKindForPath(fileName) {
  if (fileName.endsWith(".tsx")) return ts.ScriptKind.TSX;
  if (fileName.endsWith(".jsx")) return ts.ScriptKind.JSX;
  if (fileName.endsWith(".js") || fileName.endsWith(".mjs") || fileName.endsWith(".cjs")) return ts.ScriptKind.JS;
  return ts.ScriptKind.TS;
}

async function collectSourceFiles(paths) {
  const files = [];
  for (const candidate of paths) {
    const absolute = path.resolve(candidate);
    if (!existsSync(absolute)) {
      throw new Error(`Path does not exist: ${candidate}`);
    }

    const info = await stat(absolute);
    if (info.isDirectory()) {
      files.push(...await collectSourceFilesInDir(absolute));
      continue;
    }

    if (sourceExtensions.has(path.extname(absolute))) files.push(absolute);
  }

  return [...new Set(files)].sort();
}

async function collectSourceFilesInDir(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!skippedDirs.has(entry.name)) files.push(...await collectSourceFilesInDir(path.join(dir, entry.name)));
      continue;
    }

    const file = path.join(dir, entry.name);
    if (sourceExtensions.has(path.extname(file))) files.push(file);
  }
  return files;
}

async function runCli(argv) {
  const write = argv.includes("--write");
  const check = argv.includes("--check");
  const paths = argv.filter((arg) => !arg.startsWith("--"));

  if (paths.length === 0 || argv.includes("--help") || argv.includes("-h")) {
    printUsage();
    return paths.length === 0 ? 1 : 0;
  }

  const files = await collectSourceFiles(paths);
  let changed = 0;
  let failed = false;

  for (const file of files) {
    const sourceText = await readFile(file, "utf8");
    const result = transformProviderImports(sourceText, { fileName: file });

    if (result.diagnostics.length > 0) {
      failed = true;
      for (const diagnostic of result.diagnostics) {
        console.error(`${path.relative(process.cwd(), diagnostic.fileName)}:${diagnostic.line}:${diagnostic.column} ${diagnostic.message}`);
      }
      continue;
    }

    if (!result.changed) continue;
    changed += 1;
    if (check) {
      failed = true;
      console.error(`${path.relative(process.cwd(), file)}: legacy provider imports need migration`);
      continue;
    }

    if (write) {
      await writeFile(file, result.sourceText);
    } else if (files.length === 1) {
      process.stdout.write(result.sourceText);
    } else {
      console.log(`${path.relative(process.cwd(), file)}: would migrate legacy provider imports`);
    }
  }

  if (write) console.log(`Migrated legacy provider imports in ${changed} file(s).`);
  if (check && changed === 0 && !failed) console.log(`Checked ${files.length} file(s); no legacy provider imports need migration.`);

  return failed ? 1 : 0;
}

function printUsage() {
  console.log([
    "Usage: node scripts/migrate-provider-imports.mjs [--write|--check] <file-or-directory>...",
    "",
    "Rewrites legacy @cognidesk/integrations/{category}/{provider} imports to",
    "@cognidesk/integration-{category}-{provider}/manifest or /runtime. Ambiguous imports fail closed.",
  ].join("\n"));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli(process.argv.slice(2)).then((exitCode) => {
    process.exitCode = exitCode;
  }).catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
