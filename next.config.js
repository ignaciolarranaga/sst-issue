/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },

  async rewrites() {
    return [
      {
        source: "/libro/:countryCode/:slug",
        destination: "/book/:countryCode/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
