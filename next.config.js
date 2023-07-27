/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    images: {
        formats: ['image/webp'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
const withPWA = require('next-pwa')({
    customWorkerDir: 'src/worker',
    dest: 'public',
})


module.exports = withPWA(nextConfig)
