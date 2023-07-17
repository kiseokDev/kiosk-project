/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}
const withPWA = require('next-pwa')({
    customWorkerDir: 'src/worker',
    dest: 'public',
})


module.exports = withPWA(nextConfig)
