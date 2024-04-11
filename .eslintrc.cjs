module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "prettier",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"], // eslint规则
    extraFileExtensions: [".vue"],
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"], //需要忽略的组件名
      },
    ],
    "no-return-await": "in-try-catch",
    "@typescript-eslint/return-await": "in-try-catch",
  },
};
