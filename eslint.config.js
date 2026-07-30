module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
    }
  }
];