const path = require("path");

const nextConfig = {
    images: {
        domains: ["picsum.photos", "images.pexels.com"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "scss")],
    },
    // After project is finished remove this two ignores!!!!!!!
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
