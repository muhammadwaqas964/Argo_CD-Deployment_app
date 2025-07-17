import { build } from "esbuild";
import { builtinModules } from "module";

await build({
  entryPoints: ["server/index.ts"],
  bundle: true,
  platform: "node",
  format: "cjs",               // 🔁 switch from 'esm' to 'cjs'
  outfile: "dist/index.js",
  external: [
    ...builtinModules,
    "express",
    "body-parser",
    "@babel/preset-typescript/package.json",
    "../pkg",
    "lightningcss"
  ],
});
