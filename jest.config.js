module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
}
