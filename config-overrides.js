const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra")

const lessVariables = require('./src/styles/common/less_variables.js')
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: lessVariables
  })
)