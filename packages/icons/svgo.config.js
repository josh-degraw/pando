const addAriaLabel = require('./src/utils/svgo/addAriaLabel.js')

module.exports = {
  plugins: [
    'preset-default',
    'removeXMLNS',
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(stroke|fill|fill-opacity|opacity)',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            role: 'img',
            fill: 'currentColor',
          },
        ],
      },
    },
    {
      name: 'addClassesToSVGElement',
      params: {
        className: 'ps-icon-svg',
      },
    },
    {
      ...addAriaLabel,
      params: {
        useFilename: true,
        suffix: ' icon',
      },
    },
  ],
}
