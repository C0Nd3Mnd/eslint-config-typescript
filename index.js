const ERROR = 2
const WARN = 1
const OFF = 0

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@c0nd3mnd',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // Overrides for the default @c0nd3mnd configuration.
    'jsdoc/no-types': WARN,
    'jsdoc/require-jsdoc': [
      WARN,
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true
        },
        contexts: [
          'ClassProperty',
          'TSInterfaceDeclaration',
          'TSPropertySignature'
        ]
      }
    ],
    'jsdoc/require-param-type': WARN,
    'jsdoc/require-returns-type': WARN,
    // TypeScript
    '@typescript-eslint/indent': OFF,
    '@typescript-eslint/member-delimiter-style': [
      WARN,
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      WARN,
      {
        accessibility: 'explicit'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': WARN,
    '@typescript-eslint/no-explicit-any': WARN,
    '@typescript-eslint/no-non-null-assertion': WARN,
    '@typescript-eslint/no-unused-vars': WARN
  }
}
