const openProps = require("open-props");

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // "tailwindcss/nesting": "postcss-nesting",
    "postcss-import": {},
    // "postcss-nested": {},
    "postcss-custom-media": {},
    "postcss-jit-props": require("postcss-jit-props")(openProps),
    ...(process.env.NODE_ENV === "production"
      ? {
          cssnano: {
            preset: "default",
          },
          "postcss-preset-env": {
            features: { "nesting-rules": false },
          },
        }
      : {}),
  },
};
