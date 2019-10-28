const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@card-background': 'none',
      '@text-color': '#890000',
      '@text-color-secondary': '#890000',
      '@card-head-color': '#890000',
      '@body-background': '#fffaf1',
      '@primary-color': '#890000',
      '@border-radius-base': '0px',
      '@border-radius-sm': '0px',
      '@layout-body-background': 'none'
    }
  })
)
