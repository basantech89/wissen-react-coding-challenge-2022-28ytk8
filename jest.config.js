const path = require('path')

module.exports = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
