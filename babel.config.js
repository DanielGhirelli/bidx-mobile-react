module.exports = function (api) {
  api.cache().forever();

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
    ],
    plugins: [
      'nativewind/babel',
      'expo-router/babel',

      // Reanimated MUST be last
      'react-native-reanimated/plugin',
    ].filter(Boolean),
  };
};
