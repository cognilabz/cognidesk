const explicitChildEnvAllowlistKey = "STUDIO_OPERATOR_CHILD_ENV_ALLOWLIST";

const defaultChildEnvAllowlist = [
  "PATH",
  "HOME",
  "USER",
  "LOGNAME",
  "SHELL",
  "TMPDIR",
  "TEMP",
  "TMP",
  "LANG",
  "LC_ALL",
  "LC_CTYPE",
  "TERM",
  "COLORTERM",
  "TZ",
  "CI",
  "FORCE_COLOR",
  "NO_COLOR",
  "NODE_ENV",
  "CODEX_HOME",
  "XDG_CONFIG_HOME",
  "XDG_CACHE_HOME",
  "XDG_DATA_HOME",
  "USERPROFILE",
  "APPDATA",
  "LOCALAPPDATA",
  "SystemRoot",
  "WINDIR",
  "COMSPEC",
  "PATHEXT",
];

export function buildChildProcessEnv(env: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
  const childEnv: NodeJS.ProcessEnv = {};
  for (const key of [
    ...defaultChildEnvAllowlist,
    ...parseExplicitChildEnvAllowlist(env[explicitChildEnvAllowlistKey]),
  ]) {
    const value = env[key];
    if (value !== undefined) childEnv[key] = value;
  }
  return childEnv;
}

function parseExplicitChildEnvAllowlist(value: string | undefined) {
  if (!value) return [];
  return value
    .split(",")
    .map((key) => key.trim())
    .filter((key) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(key));
}
