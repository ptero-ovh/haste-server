const { rootDir } = require('./constants')
const path = require('path');

const config = {

  "host": "localhost",
  "port": 8290,

  "keyLength": 10,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
    "type": "file"
  },

  "documents": {
    "about": path.resolve(rootDir, 'README.md')
  }

}

module.exports = config;
