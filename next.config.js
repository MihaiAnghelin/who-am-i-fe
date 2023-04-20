const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    webpack(config)
    {
        const fileLoaderRule = config.module.rules.find(
            (rule) => rule.test && rule.test.test(".svg"),
        );
        fileLoaderRule.exclude = /\.icon\.svg$/;
        config.module.rules.push({
            test: /\.icon\.svg$/,
            loader: require.resolve("@svgr/webpack"),
        });
        return config;
    },

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['api-who-am-i.mihaianghelin.ro', "localhost:5123"],
    },
};

module.exports = nextConfig;
