// ============================================================================
// КОНФИГУРАЦИЯ TYPESCRIPT ESLINT
// ============================================================================
// Правила для TypeScript кода
// Документация: https://typescript-eslint.io/
// ============================================================================

import tseslint from 'typescript-eslint'

/**
 * Получить конфигурацию TypeScript ESLint
 * Включает рекомендуемые правила TypeScript
 * @returns {import('./types.js').ESLintConfig}
 */
export function getTypeScriptConfig() {
	return tseslint.config(
		// Рекомендуемые правила TypeScript
		...tseslint.configs.recommended,

		// Дополнительные настройки
		{
			files: ['**/*.{ts,tsx}'],
			rules: {
				// ====================================================================
				// ПРАВИЛА TYPESCRIPT
				// ====================================================================

				// Неиспользуемые переменные
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						argsIgnorePattern: '^_',
						varsIgnorePattern: '^_',
						caughtErrorsIgnorePattern: '^_',
					},
				],

				// Явные типы возврата функций
				'@typescript-eslint/explicit-function-return-type': 'off',

				// Явные типы модулей
				'@typescript-eslint/explicit-module-boundary-types': 'off',

				// Any тип
				'@typescript-eslint/no-explicit-any': 'warn',

				// Require await в async функциях
				'@typescript-eslint/require-await': 'off',

				// Non-null assertion
				'@typescript-eslint/no-non-null-assertion': 'warn',

				// Empty interface
				'@typescript-eslint/no-empty-interface': [
					'error',
					{
						allowSingleExtends: true,
					},
				],

				// Пустые функции
				'@typescript-eslint/no-empty-function': [
					'warn',
					{
						allow: ['arrowFunctions'],
					},
				],

				// ====================================================================
				// ДОПОЛНИТЕЛЬНЫЕ ПРАВИЛА ИЗ СТАРОГО ПРОЕКТА
				// ====================================================================

				// Shadow переменных (TypeScript версия)
				'@typescript-eslint/no-shadow': 'off',

				// Дополнительные правила TypeScript (раскомментируйте при необходимости):
				// '@typescript-eslint/consistent-type-imports': 'error',
				// '@typescript-eslint/no-unnecessary-condition': 'warn',
				// '@typescript-eslint/strict-boolean-expressions': 'warn',
			},
		}
	)
}
