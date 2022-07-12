import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import swc from "rollup-plugin-swc";
import filesize from "rollup-plugin-filesize";
const packageJson = require("./package.json");

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: false,
                name: "@ht/components",
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: false,
            },
        ],
        plugins: [
            babel({
                // this is needed because we're using TypeScript
                babelHelpers: "bundled",
                extensions: [".ts", ".tsx"],
            }),
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                config: {
                    path: "./postcss.config.js",
                },
                extensions: [".css"],
                minimize: true,
                extract: "lib.css",
            }),
            swc({
                jsc: {
                    parser: {
                        syntax: "typescript",
                    },
                    target: "es2018",
                },
            }),
            terser(),
            filesize(),
        ],
    },
];
