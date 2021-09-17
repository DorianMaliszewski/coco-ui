import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

const input = 'src/index.ts'

const plugins = [
  typescript({
    tsconfig: './tsconfig.json',
  }),
  postcss({
    config: {
      path: './postcss.config.js',
    },
    minimize: true,
    extract: true,
    extensions: ['.css'],
  }),
  nodeResolve({
    preferBuiltins: true,
  }),
  url(),
  svgr({ memo: true }),
  commonjs({
    include: '**/node_modules/**',
  }),
  copy({
    targets: [
      {
        src: './tailwind.config.js',
        dest: 'dist/',
        rename: 'tailwind-theme.js',
      },
    ],
  }),
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins,
    external,
  },
]
