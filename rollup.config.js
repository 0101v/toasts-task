import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve'; 
import { babel } from '@rollup/plugin-babel';
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import generatePackageJson from "rollup-plugin-generate-package-json";

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: ["react", "react-dom", "styled-components"],
  plugins: [
    nodeResolve({ extensions: [".jsx", ".js", ".tsx"] }), 
    babel({ 
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: [".jsx", ".js", ".tsx"], 
    }),
    url(),
    svgr(),
    commonjs(),
    generatePackageJson({
      outputFolder: "dist",
      baseContents: (el) => ({
        name: el.name,
        main: "bundles/bundle.js",
        peerDependencies: {
          react: "^17.0.2",
        },
      }),
    }),
  ]
};