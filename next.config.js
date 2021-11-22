const path = require('path')

module.exports = {
	swcMinify: true,
	webpack: config => {
		config.resolve.modules.push(path.resolve('src'))

		return config
	},
	experimental: {
		// https://github.com/vercel/next.js/issues/30330
		// TODO: current workaround for Chakra and NEXTJS 12
		esmExternals: false
	}
}