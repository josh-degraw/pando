const yaml = require('yaml')
const baseFilter = require('./filters/baseFilter')
const jsFilter = require('./filters/jsFilter')

// filters

const baseFileConfig = {
  filter: baseFilter,
}
const jsFileConfig = {
  filter: jsFilter,
}

// transforms

const transforms = ['color/hsl-4']
const jsTransforms = [...transforms, 'name/cti/camel']
const KEBAB = 'name/cti/kebab'

// parsers

const parsers = [
  {
    pattern: /\.yaml$/,
    parse: ({ contents }) => yaml.parse(contents),
  },
]

const skillsSources = [
  'tokens/base/*.yaml',
  'tokens/public/color.yaml',
  'tokens/public/lightColors.yaml',
]

// platforms

const es6 = {
  transformGroup: 'js',
  transforms: jsTransforms,
  buildPath: 'build/',
  files: [
    {
      ...jsFileConfig,
      destination: 'index.js',
      format: 'javascript/es6',
    },
  ],
}

const commonjs = {
  transformGroup: 'commonjs',
  transforms: jsTransforms,
  buildPath: 'build/common/',
  files: [
    {
      ...jsFileConfig,
      destination: 'index.js',
      format: 'javascript/module-flat',
    },
  ],
}

const ts = {
  transformGroup: 'ts',
  transforms: jsTransforms,
  buildPath: 'build/',
  files: [
    {
      ...jsFileConfig,
      destination: 'index.d.ts',
      format: 'typescript/es6-declarations',
    },
  ],
}

const css = {
  transformGroup: 'css',
  transforms: [...transforms, KEBAB],
  buildPath: 'build/css/',
  files: [
    {
      ...baseFileConfig,
      destination: 'variables.css',
      format: 'css/variables',
    },
  ],
}

const scss = {
  transformGroup: 'scss',
  transforms: [...transforms, KEBAB],
  buildPath: 'build/scss/',
  files: [
    {
      ...baseFileConfig,
      destination: '_variables.scss',
      format: 'scss/variables',
    },
  ],
}

const vars = {
  commonjs,
  css,
  es6,
  parsers,
  scss,
  skillsSources,
  ts,
}

module.exports = vars