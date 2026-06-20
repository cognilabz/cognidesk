import { spawn } from "node:child_process";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const generatedApiReferenceDir = path.join(repoRoot, "website/api-reference/generated");

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: repoRoot,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} failed with ${signal ?? `exit code ${code}`}.`));
    });
  });
}

async function* walkFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      yield* walkFiles(entryPath);
    } else if (entry.isFile()) {
      yield entryPath;
    }
  }
}

async function stripGeneratedMarkdownTrailingWhitespace() {
  let changedFiles = 0;

  for await (const filePath of walkFiles(generatedApiReferenceDir)) {
    if (!filePath.endsWith(".md")) continue;

    const original = await readFile(filePath, "utf8");
    const stripped = original.replace(/[ \t]+$/gm, "");
    if (stripped === original) continue;

    await writeFile(filePath, stripped);
    changedFiles += 1;
  }

  if (changedFiles > 0) {
    console.log(`Stripped trailing whitespace from ${changedFiles} generated API Markdown files.`);
  }
}

await run(process.execPath, ["scripts/generate-provider-integration-catalog.mjs"]);
await run(process.execPath, ["node_modules/typedoc/bin/typedoc"]);
await stripGeneratedMarkdownTrailingWhitespace();
