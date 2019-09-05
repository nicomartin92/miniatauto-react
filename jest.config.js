module.exports = {
  verbose: true,
  "collectCoverageFrom": [
    "**/*.test.js",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/stories/**",
    "!**fireBaseConfig.js",
    "**/*serviceWorker.js",
    "**/*carsData.js"
  ],
  "jest": {
    "forceCoverageMatch": ["**/*.test.js"]
  }
};