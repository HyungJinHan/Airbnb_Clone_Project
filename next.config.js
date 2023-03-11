/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key: process.env.NEXT_PUBLIC_MAPBOX_API,
  },
};
