import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf8'}));
const banner = `/* @${pkg.version}, license MIT */`;

export default [
  {
    input: 'node_modules/codesandbox/lib/api/define.js',
    plugins: [
      resolve({browser: true}),
      commonJS(),
    ],
    output: [
      {
        format: 'es',
        file: 'dist/codesandbox-getparameters.module.js',
        indent: '  ',
        banner,
      },
    ],
  },
];
