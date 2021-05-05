// webpack 5 config
module.exports = {
  future: { webpack5: true },
  images: {
    domains: ["links.papareact.com","image.tmdb.org"]
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, module: false }

    return config
  },
}