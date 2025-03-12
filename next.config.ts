import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: '1000logos.net'
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org'
            },
            {
                protocol: 'https',
                hostname: 'static-00.iconduck.com'
            },
            {
                protocol: 'https',
                hostname: 'img.icons8.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.iconscout.com'
            },
            {
                protocol: 'https',
                hostname: 'w7.pngwing.com'
            },
            {
                protocol: 'https',
                hostname: 'static.wixstatic.com'
            },
        ],
    },
};

export default nextConfig;
