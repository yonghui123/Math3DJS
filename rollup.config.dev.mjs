import { defineConfig } from "rollup";
import { babel, getBabelOutputPlugin } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "index.ts",
  output: {
    dir: "dev",
    format: "es",
    sourcemap: "inline",
    plugins: [
      getBabelOutputPlugin({
        presets: ["@babel/preset-env"],
      }),
    ],
  },
  plugins: [
    typescript({
      compilerOptions: {
        lib: ["es5", "es6", "dom"],
        target: "es5",
      },
    }),
    babel({ exclude: "node_modules/**" }),
  ],
});
