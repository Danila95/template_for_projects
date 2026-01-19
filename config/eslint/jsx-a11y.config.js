// ============================================================================
// КОНФИГУРАЦИЯ JSX ACCESSIBILITY (A11Y)
// ============================================================================
// Правила доступности для JSX
// Документация: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
// ============================================================================

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

/**
 * Получить конфигурацию JSX A11y правил
 * Проверяет правила доступности в JSX
 * @returns {import('./types.js').ESLintConfigItem}
 */
export function getJsxA11yConfig() {
	return {
		files: ['**/*.{tsx,jsx}'],
		plugins: {
			'jsx-a11y': jsxA11yPlugin,
		},
		rules: {
			// ====================================================================
			// JSX A11Y ПРАВИЛА
			// ====================================================================
			// Базовые рекомендуемые правила
			...jsxA11yPlugin.configs.recommended.rules,

			// Отключаем некоторые правила для гибкости

			// Click events должны иметь keyboard events
			'jsx-a11y/click-events-have-key-events': 'off',

			// Статические элементы не должны иметь обработчиков событий
			'jsx-a11y/no-static-element-interactions': 'off',

			// Дополнительные правила можно добавить здесь:
			// 'jsx-a11y/alt-text': 'error',
			// 'jsx-a11y/anchor-is-valid': 'error',
			// 'jsx-a11y/aria-props': 'error',
		},
	}
}
