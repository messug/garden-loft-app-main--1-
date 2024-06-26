module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
          },
        },
      ],
    ],
  };
};
