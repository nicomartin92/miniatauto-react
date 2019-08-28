module.exports = {
  verbose: true,
  "collectCoverageFrom": [
    "**/*.test.js",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/stories/**"
  ],
  "jest": {
    "forceCoverageMatch": ["**/*.test.js"]
  }
};