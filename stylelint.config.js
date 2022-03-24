module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "no-empty-source": null,
    "rule-empty-line-before": null,
    "selector-class-pattern": null,
    "color-function-notation": "space" | "comma",
    "color-function-notation": null
  }, 
}
