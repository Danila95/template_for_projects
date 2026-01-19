// ============================================================================
// КОНФИГУРАЦИЯ IMPORT ESLINT
// ============================================================================
// Правила для импортов модулей
// Документация: https://github.com/import-js/eslint-plugin-import
// ============================================================================

import importPlugin from 'eslint-plugin-import'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

/**
 * Получить конфигурацию Import правил
 * @returns {import('./types.js').ESLintConfigItem}
 */
export function getImportConfig() {
	return {
		files: ['**/*.{ts,tsx,js,jsx}'],
		plugins: {
			import: importPlugin,
			'unused-imports': unusedImportsPlugin,
		},
		settings: {
			// Настройки для import плагина
			'import/extensions': ['.js', '.jsx', '.tsx', '.ts'],
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
			'import/resolver': {
				typescript: {},
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
		},
		rules: {
			// ====================================================================
			// IMPORT ПРАВИЛА
			// ====================================================================

			// Отключить проверку неразрешённых импортов (TypeScript сам это проверяет)
			'import/no-unresolved': 'off',

			// Расширения файлов в импортах
			'import/extensions': 'off',

			// Предпочитать default export
			'import/prefer-default-export': 'off',

			// Запретить циклические зависимости
			'import/no-cycle': 'off',

			// Внешние зависимости в devDependencies
			'import/no-extraneous-dependencies': 'off',

			// ====================================================================
			// UNUSED IMPORTS ПРАВИЛА
			// ====================================================================

			// Предупреждать о неиспользуемых импортах
			'unused-imports/no-unused-imports': 'warn',

			// Неиспользуемые переменные (работает с TypeScript)
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	}
}
