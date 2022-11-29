const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //关闭语法检查
    devServer: { // 自定义服务配置
        open: false, // 自动打开浏览器、

        port: 8080,
        proxy: {
            '/api':{
                // target: "http://101.34.0.186:8082",
                target: "http://localhost:8081",
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }

    },

})
