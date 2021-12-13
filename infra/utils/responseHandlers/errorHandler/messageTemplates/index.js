const fs = require('fs')

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js' && file.endsWith('.js')) {
    const moduleName = file.split('.')[0]
    exports[moduleName.toLowerCase()] = require('./' + moduleName)
    exports[moduleName.toUpperCase()] = require('./' + moduleName)
  }
})
