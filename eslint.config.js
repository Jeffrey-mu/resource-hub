// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
  // '**/fixtures',
  // ...globs
    'dist',
    'public',
    'src/helpers',
    'src/script',
  ],
}, {
  rules: {
    'no-console': 'off',
  },
})
