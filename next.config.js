const path = require("path");

const nextConfig = {
    images: {
        domains: ["picsum.photos"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = nextConfig;
