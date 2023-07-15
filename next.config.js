/** @type {import('next').NextConfig} */
const nextConfig = {}
const withPWA = require('next-pwa')({
    customWorkerDir: 'src/worker',
    dest: 'public',
})


module.exports = withPWA(nextConfig)
