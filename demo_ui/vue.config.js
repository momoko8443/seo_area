module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                ws: true,
                changeOrigin: true
            },
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    },
   

}