// ============================================================================
// КОНФИГУРАЦИЯ PRETTIER + ESLINT ИНТЕГРАЦИЯ
// ============================================================================
// Интеграция Prettier с ESLint
// Prettier форматирует код, ESLint проверяет стиль
//
// ВАЖНО: Это НЕ конфигурация Prettier (она в config/prettier/)
// Это ESLint модуль, который интегрирует Prettier с ESLint
// ============================================================================

import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

/**
 * Получить конфигурацию Prettier для ESLint
 * Отключает правила ESLint, которые конфликтуют с Prettier
 * @returns {import('./types.js').ESLintConfigItem}
 */
export function getPrettierConfig() {
	return {
		files: ['**/*.{ts,tsx,js,jsx}'],
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			// ====================================================================
			// PRETTIER ПРАВИЛА
			// ====================================================================

			// Показывать ошибки Prettier как ошибки ESLint
			'prettier/prettier': [
				'error',
				{
					// Настройки Prettier (должны совпадать с .prettierrc.js)
					trailingComma: 'es5',
					tabWidth: 2,
					useTabs: true,
					semi: false,
					singleQuote: true,
					arrowParens: 'avoid',
					jsxSingleQuote: true,
					bracketSpacing: true,
					bracketSameLine: false,
					printWidth: 80,
					endOfLine: 'auto',
					singleAttributePerLine: true,
				},
			],

			// Отключаем правила ESLint, которые конфликтуют с Prettier
			...prettierConfig.rules,
		},
	}
}
