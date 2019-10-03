export default {
    head: {
        titleTemplate: 'zcom HN | %s',
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'dns-prefetch', href: 'https://api.hackerwebapp.com' },
            { rel: 'preconnect', href: 'https://api.hackerwebapp.com' }
        ]
    },

    loading: {
        color: '#000'
    },

    manifest: {
        name: 'zcom Hacker News',
        short_name: 'zcom HN',
        description: 'HackerNews clone built with Nuxt.js',
        theme_color: '#2d2d2d',
        start_url: '/news'
    },

    devModules: [
        '@nuxtjs/pwa',
        '@nuxtjs/axios'
    ],

    axios: {
        baseURL: 'https://api.hackerwebapp.com'
    },

    plugins: [
        '~/plugins/filters'
    ],

    render: {
        http2: {
            push: true
        },
        static: {
            maxAge: '1y',
            setHeaders(res, path) {
                if (path.includes('sw.js')) {
                    res.setHeader('Cache-Control', `public, max-age=${15 * 60}`);
                }
            }
        }
    }
};
