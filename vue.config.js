module.exports={
    devServer:{
        // 配置网络代理，解决跨域问题---vue网络代理/axios网络代理
        proxy:{
            '/api':{
                target:"https://",
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        },
        // true 则热更新，false 则手动刷新，默认值为 true
        inline: false,
    },
    chainWebpack: config => {
        // 修复HMR-热更新
        config.resolve.symlinks(true);  
    }
}