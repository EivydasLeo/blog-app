/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
        @import "/app/scss/variables/variables.scss";
      `,
  },
};

export default nextConfig;
