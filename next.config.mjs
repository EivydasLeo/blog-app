import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/requets.ts");

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        prependData: `
      @import "app/styles/variables/variables.scss";
    `,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
};

export default withNextIntl(nextConfig);
