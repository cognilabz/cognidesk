import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const appRoot = fileURLToPath(new URL(".", import.meta.url));
const reactRoot = resolve(appRoot, "node_modules/react");
const reactDomRoot = resolve(appRoot, "node_modules/react-dom");
const streamdownRoot = resolve(appRoot, "node_modules/streamdown");

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: [
      { find: /^react$/, replacement: resolve(reactRoot, "index.js") },
      { find: /^react\/jsx-runtime$/, replacement: resolve(reactRoot, "jsx-runtime.js") },
      { find: /^react\/jsx-dev-runtime$/, replacement: resolve(reactRoot, "jsx-dev-runtime.js") },
      { find: /^react-dom$/, replacement: resolve(reactDomRoot, "index.js") },
      { find: /^react-dom\/client$/, replacement: resolve(reactDomRoot, "client.js") },
      { find: /^streamdown$/, replacement: resolve(streamdownRoot, "dist/index.js") },
      { find: /^streamdown\/styles.css$/, replacement: resolve(streamdownRoot, "styles.css") },
    ],
  },
});
