# Preinstall Studio sandbox tooling

Studio Source Sandbox containers will include the normal developer toolchain needed for code work, such as `git`, `gh`, language runtimes, package managers, and validation tooling, rather than relying on a Studio-specific bootstrap CLI to install them per session. The Studio Operator Runtime, potentially implemented with a Codex-app-server-style backend, decides which tools and capabilities to use from the user's goal, configured instructions, Studio Credential Grants, and target manifest constraints.
