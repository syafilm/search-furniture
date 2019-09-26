module.exports = {
  setupFiles: [
    "./jest.setup.js"
  ],
  moduleNameMapper: {
    "^api(.*)$": "<rootDir>/src/api$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
    "^pages(.*)$": "<rootDir>/src/pages$1",
    "^stores(.*)$": "<rootDir>/src/stores$1",
    "^locales(.*)$": "<rootDir>/src/locales$1",
    "^images(.*)$": "<rootDir>/src/test/__mocks__/imagesMock.js",
    "^styles(.*)$": "<rootDir>/src/assets/stylesheets$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "\\.yml$": "jest-yaml-transform",
    "^.+\\.svg$": "jest-svg-transformer"
  }
}