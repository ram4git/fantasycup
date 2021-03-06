const packageJson = require('../package.json')
const manifest = require('../manifest.json')

const appSlug = 'nextjs-pwa-graphql-sql'
const serverPort = process.env.PORT || 3003

const completeConfig = {

  default: {
    serverPort,
    appSlug,
    appUrl: process.env.APP_URL || '', // Used for GraphQL url - see graphql/apollo.js. Not used/needed by Zeit Now.
    appName: manifest.name,
    appTagline: manifest.description,
    appDescription: manifest.description,
    locale: 'en_US',
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    googleAnalyticsId: null
  },

  production: {
  }

}

// Public API
module.exports = {
  config: { ...completeConfig.default, ...completeConfig[process.env.NODE_ENV] },
  completeConfig
}