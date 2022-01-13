const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    publicPath: "http://127.0.0.1:8080", //windows
    //publicPath: "http://0.0.0.0:8080/", //linux
    outputDir: './dist/',

    chainWebpack: config => {

        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: './webpack-stats.json'}])

        config.output
            .filename('bundle.js')

        config.optimization
        	.splitChunks(false)

        config.resolve.alias
            .set('__STATIC__', 'static')

        config.devServer
            // the first 3 lines of the following code have been added to the configuration
            .public('https://fullstack-blog-ars.herokuapp.com/')    
            .host('fullstack-blog-ars.herokuapp.com')    
            .port(8080)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .disableHostCheck(true)
            .headers({"Access-Control-Allow-Origin": ["\*"]})

    },
};