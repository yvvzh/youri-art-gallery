import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/youri-art-gallery" : "",
    images: {
        unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === "production" ? "/youri-art-gallery/" : "",
    trailingSlash: true,
};

export default nextConfig;
