module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: '福居网',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/main.css',
        '~/assets/css/iconfont.css',
        'element-ui/lib/theme-chalk/index.css',
        '~/assets/css/overwrite.scss'
    ],
    /*
    ** Add axios globally
    */

    build: {
        vendor: ['axios', 'md5', 'js-cookie'],
        /*
        ** Run ESLINT on save
        */
        extend(config, ctx) {
            if (ctx.isClient) {
                // config.module.rules.push({
                    // enforce: 'pre',
                    // test: /\.(js|vue)$/,
                    // loader: 'eslint-loader',
                    // exclude: /(node_modules)/
                // })
                config.entry['babel-polyfill'] = ['babel-polyfill']
            }
        }
    },
    plugins: [{src: "~/plugins/vue-awesome-swiper", ssr: false}, {src: "~/plugins/element-ui"}]
}
