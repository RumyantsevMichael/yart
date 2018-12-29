import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const postcssUnits = require('postcss-units');

export default {
    input: 'src/index.ts',
    output: {
        file: 'lib/index.js',
        format: 'esm',
    },
    external: [
        'react',
        'react-dom',
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: 'tsconfig.build.json',
        }),
        postcss({
            modules: {
                generateScopedName: '[hash:base64]',
            },
            namedExports: true,
            minimize: true,
            extract: false,
            plugins: [
                postcssUnits({
                    precision: 4,
                }),
            ],
        }),
        minify(),
    ],
};
