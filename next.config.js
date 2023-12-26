/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'occ-0-1168-299.1.nflxso.net',
            },
        ],
    },
    // serverComponentsExternalPackages: ["mongoose"]
}

module.exports = nextConfig
