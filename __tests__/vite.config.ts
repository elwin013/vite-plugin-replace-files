import { defineConfig } from "vite";
import replaceFiles from "../src/index";

export default defineConfig({
  build: {
    minify: false,
    polyfillModulePreload: false,
  },
  plugins: [
    replaceFiles([
      {
        file: "eLog.js",
        replacement: "eLogReplacement.js",
      },
    ]),
  ],
});
