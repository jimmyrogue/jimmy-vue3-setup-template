import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  unocss: true,
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    '**/fixtures',
    'public',
    // ...globs
  ],
})
