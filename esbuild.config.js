const esbuild = require("esbuild");
const path = require("node:path");
esbuild.build({
  entryPoints: [path.join(__dirname, "src/popup.ts")],
  bundle: true,
  outdir: path.join(__dirname, "dist"),
  target: "chrome110",
  format: "iife"
}).catch(() => process.exit(1));
