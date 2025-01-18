import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import html from "@rollup/plugin-html";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "es", // can be changes to iife as well.
    manualChunks: {
      // Separate React into its own chunk
      "react-vendor": ["react"],
      // Separate ReactDOM into its own chunk
      "react-dom-vendor": ["react-dom"],
    },
  },
  plugins: [
    resolve({
      moduleDirectories: ["node_modules"],
    }),
    commonjs({
      // Include React in the bundle
      include: ["node_modules/**"],
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
      extensions: [".js", ".jsx"],
    }),
    html({
      title: "My App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
    }),
    replace({
      preventAssignment: false,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    // terser({
    //   compress: {
    //     drop_console: true,
    //   },
    //   format: {
    //     comments: false,
    //   },
    // }),
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
  },
};
