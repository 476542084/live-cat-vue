import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import nodePoly from 'rollup-plugin-polyfill-node'
import { terser } from "rollup-plugin-terser";

const OUTPUT_DIT = './dict'

const ModulePlugins = [
    resolve({ preferBuiltins: true }),
    commonjs(),
    vue(),
    replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    nodePoly(),
    babel(),
    terser(),
]
const module = {
    input: 'src/main.js',
    output: {
        // sourcemap: true,
        name: 'bundle',
        file: `${OUTPUT_DIT}/bundle.js`,
        format: 'iife',
    },
    plugins: [
        ...ModulePlugins,
    ]
}
export default module