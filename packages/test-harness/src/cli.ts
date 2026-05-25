#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { createTestHarness, type CognideskTestHarness, type HarnessAgentClient, type HarnessScenario, type TestHarnessOptions } from "./index.js";

export interface EvalCliConfig {
  scenarios: HarnessScenario[];
  harness?: Pick<CognideskTestHarness, "runScenario">;
  client?: HarnessAgentClient;
  simulatedUserModel?: TestHarnessOptions["simulatedUserModel"];
  judgeModel?: TestHarnessOptions["judgeModel"];
}

export interface EvalCliResult {
  passed: boolean;
  results: Array<Awaited<ReturnType<CognideskTestHarness["runScenario"]>>>;
}

export interface EvalCliIo {
  stdout?: Pick<NodeJS.WriteStream, "write">;
  stderr?: Pick<NodeJS.WriteStream, "write">;
}

export async function runEvalCli(argv: string[] = process.argv.slice(2), io: EvalCliIo = {}) {
  const stdout = io.stdout ?? process.stdout;
  const stderr = io.stderr ?? process.stderr;
  try {
    const options = parseArgs(argv);
    const config = await loadEvalConfig(options.config);
    const harness = resolveHarness(config);
    const results = [];
    for (const scenario of config.scenarios) {
      results.push(await harness.runScenario(scenario));
    }
    const output: EvalCliResult = {
      passed: results.every((result) => result.passed),
      results,
    };
    stdout.write(`${JSON.stringify(output, null, options.pretty ? 2 : 0)}\n`);
    return output.passed ? 0 : 1;
  } catch (error) {
    stderr.write(`${error instanceof Error ? error.message : "Unknown eval CLI error"}\n`);
    return 1;
  }
}

async function loadEvalConfig(configPath: string): Promise<EvalCliConfig> {
  const module = await import(pathToFileURL(configPath).href) as {
    default?: EvalCliConfig;
    scenarios?: HarnessScenario[];
    harness?: EvalCliConfig["harness"];
    client?: HarnessAgentClient;
    simulatedUserModel?: TestHarnessOptions["simulatedUserModel"];
    judgeModel?: TestHarnessOptions["judgeModel"];
  };
  const config = module.default ?? module;
  if (!Array.isArray(config.scenarios) || config.scenarios.length === 0) {
    throw new Error(`Eval config '${configPath}' must export a non-empty scenarios array.`);
  }
  return {
    scenarios: config.scenarios,
    ...(config.harness ? { harness: config.harness } : {}),
    ...(config.client ? { client: config.client } : {}),
    ...(config.simulatedUserModel ? { simulatedUserModel: config.simulatedUserModel } : {}),
    ...(config.judgeModel ? { judgeModel: config.judgeModel } : {}),
  };
}

function resolveHarness(config: EvalCliConfig) {
  if (config.harness) return config.harness;
  if (!config.client) throw new Error("Eval config must export either harness or client.");
  return createTestHarness({
    client: config.client,
    ...(config.simulatedUserModel ? { simulatedUserModel: config.simulatedUserModel } : {}),
    ...(config.judgeModel ? { judgeModel: config.judgeModel } : {}),
  });
}

function parseArgs(argv: string[]) {
  let config = "";
  let pretty = false;
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--config" || arg === "-c") {
      config = argv[index + 1] ?? "";
      index += 1;
      continue;
    }
    if (arg === "--pretty") {
      pretty = true;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      throw new Error("Usage: cognidesk-eval --config ./eval.config.mjs [--pretty]");
    }
    throw new Error(`Unknown argument '${arg}'.`);
  }
  if (!config) throw new Error("Missing required --config path.");
  return { config, pretty };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = await runEvalCli();
}
