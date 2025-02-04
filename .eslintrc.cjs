module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'eslint-config-prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'react-hooks',
    ],
    rules: {
      // Exemplo de regra personalizada
      'react/prop-types': 'off', // Desativa a verificação de prop-types
      'react/react-in-jsx-scope': 'off', // Permite usar JSX sem importar React
      'semi': ['error', 'always'], // Exige o uso de ponto e vírgula
      'quotes': ['error', 'single'], // Exige o uso de aspas simples
      '@typescript-eslint/no-unused-vars': 'warn', // Avisa sobre variáveis não utilizadas
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  