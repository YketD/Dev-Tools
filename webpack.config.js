
const webpack = require('webpack');
console.log(__dirname)
var path = __dirname + '\\public\\javascripts\\'
module.exports = {
    entry: {
        bundle1:  path + 'cc-loader.js',
        bundle2:  path + 'color-change.js'
    },
    output: {
        path: path + 'public\\javascripts',
        filename: "[name].js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};