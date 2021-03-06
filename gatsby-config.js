const config = require('./site-config/');

module.exports = {
    pathPrefix: '/gatsby-starter-skeleton-markdown',
    siteMetadata: {
        title: config.siteTitle,
        siteUrl: config.siteUrl,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'weekly',
                path: `${__dirname}/content/weekly`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-smartypants',
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1600,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: config.siteName,
                short_name: config.siteName,
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#ffffff',
                display: 'minimal-ui',
                icons: [
                    {
                        src: `/${config.faviconDir}/android-chrome-192x192.png`,
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: `/${config.faviconDir}/android-chrome-512x512.png`,
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        },
        'gatsby-plugin-offline',
    ],
};
