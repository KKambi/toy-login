const path = require('path')

module.exports = {
    entry: './public/javascripts/todo_join.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'none',
    devtool: '#inline-source-map'
};