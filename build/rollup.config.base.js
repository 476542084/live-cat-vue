import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import nodePoly from 'rollup-plugin-polyfill-node'
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy'
import liveCatPKG from '../package.json'
import path from 'path'

const SOURCE_DIR = './'
const OUTPUT_DIT = './dict'
const LIBRARY_NAME = 'LiveCat'
const IsProduction = process.env.NODE_ENV === 'production'
export {
    SOURCE_DIR, OUTPUT_DIT, LIBRARY_NAME, liveCatPKG
}
export default {
    input: 'src/index.js',
    plugins: [
        resolve({ preferBuiltins: true }),
        commonjs({
            ignoreGlobal: true,
            include: /\/node_modules\//,
            namedExports: {
                react: Object.keys(require('react')),
                'react-is': Object.keys(require('react-is')),
                'react/jsx-runtime': ['jsx', 'jsxs', 'Fragment'],
                'react-dom': ['render', 'unmountComponentAtNode'],
            },
        }),
        vue(),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        nodePoly(),
        babel(),
        terser(),
        IsProduction &&
        copy({
            targets: [
                { src: path.join(SOURCE_DIR, 'package.json'), dest: OUTPUT_DIT },
                { src: path.join(SOURCE_DIR, 'README.md'), dest: OUTPUT_DIT }],
            verbose: true
        })
    ],
    external: ['vue']
}
