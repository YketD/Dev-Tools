
const webpack = require('webpack');
module.exports = {
    entry: {
        bundle1: 'D:\\GitHub\\Dev-Tools\\public\\javascripts\\cc-loader.js',
        bundle2: 'D:\\GitHub\\Dev-Tools\\public\\javascripts\\color-change.js'
    },
    output: {
        path: 'D:\\GitHub\\Dev-Tools\\public\\javascripts',
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