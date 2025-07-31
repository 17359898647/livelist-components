import eslint from '@antfu/eslint-config'

export default eslint({
  ignores: [
    'node_modules',
    'swagger-docs/*',
    '.claude/*',
    'swagger-spec.json',
  ],
  solid: true,
  yaml: true,
  typescript: {
    overrides: {
      'ts/consistent-type-imports': 0,
      'n/prefer-global/process': 0,
      'dot-notation': 0,
      'node/no-path-concat': 0,
      'unused-imports/no-unused-vars': 0,
      'no-unused-vars': 0,
      'no-console': 0,
    },
  },
  isInEditor: false,
  jsonc: true,
  imports: {
    overrides: {
      'import/newline-after-import': [2, { count: 1 }],
      'import/first': 2,
      'import/no-duplicates': 2,
      'perfectionist/sort-imports': [2, {
        type: 'line-length',
        order: 'desc',
        ignoreCase: true,
        fallbackSort: {
          type: 'alphabetical',
          order: 'asc',
        },
        newlinesBetween: 1,
        groups: [
          'type-import',
          ['value-builtin', 'value-external'],
          'type-internal',
          'value-internal',
          ['type-parent', 'type-sibling', 'type-index'],
          ['value-parent', 'value-sibling', 'value-index'],
          'ts-equals-import',
          'unknown',
        ],
      }],
      'perfectionist/sort-exports': [2, {
        type: 'line-length',
        order: 'desc',
        fallbackSort: {
          type: 'alphabetical',
          order: 'asc',
        },
      }],
    },
  },
})
