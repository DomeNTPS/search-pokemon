/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.pokemondb.net',
          port: '',
        },
      ],
    },
  }
