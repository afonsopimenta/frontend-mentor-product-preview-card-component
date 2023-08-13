/** @type {import('prettier').Options} */
const prettierConfig = {
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = prettierConfig;
