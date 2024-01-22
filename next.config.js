const path = require("path");

const nextConfig = {
    images: {
        domains: ["picsum.photos", "images.pexels.com"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = nextConfig;
