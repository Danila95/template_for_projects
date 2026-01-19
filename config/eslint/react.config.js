// ============================================================================
// КОНФИГУРАЦИЯ REACT ESLINT
// ============================================================================
// Правила для React и React Hooks
// Документация: https://react.dev/learn/editor-setup#linting
// ============================================================================

import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

/**
 * Получить конфигурацию React Hooks
 * Проверяет правила хуков React
 * @returns {import('./types.js').ESLintConfigItem}
 */
export function getReactHooksConfig() {
	return {
		files: ['**/*.{ts,tsx}'],
		plugins: {
			react: react,
			'react-hooks': reactHooks,
		},
		settings: {
			react: {
				version: 'detect', // Автоматически определять версию React
			},
		},
		rules: {
			...reactHooks.configs.recommended.rules,

			// ====================================================================
			// REACT HOOKS ПРАВИЛА
			// ====================================================================

			// Правила хуков (rules of hooks)
			'react-hooks/rules-of-hooks': 'error',

			// Зависимости хуков
			'react-hooks/exhaustive-deps': 'off', // Из старого проекта
		},
	}
}

/**
 * Получить конфигурацию React Refresh (Fast Refresh / HMR)
 * Обеспечивает корректную работу Hot Module Replacement
 * @returns {import('./types.js').ESLintConfigItem}
 */
export function getReactRefreshConfig() {
	return {
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'react-refresh': reactRefresh,
		},
		rules: {
			// ====================================================================
			// REACT REFRESH ПРАВИЛА
			// ====================================================================

			// Только экспорт компонентов для Fast Refresh
			'react-refresh/only-export-components': [
				'warn',
				{
					allowConstantExport: true,
					allowExportNames: ['loader', 'action', 'meta'],
				},
			],
		},
	}
}

/**
 * Получить дополнительные правила React из старого проекта
 * @returns {import('./types.js').ESLintConfigItem}
 */
export function getReactAdditionalRules() {
	return {
		files: ['**/*.{tsx,jsx}'],
		plugins: {
			react: react,
		},
		rules: {
			// ====================================================================
			// REACT ПРАВИЛА ИЗ СТАРОГО ПРОЕКТА
			// ====================================================================

			// React не нужно импортировать в React 17+
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',

			// JSX правила
			'react/jsx-props-no-spreading': 'off',
			'react/jsx-no-useless-fragment': 'off',
			'react/jsx-filename-extension': [
				1,
				{
					extensions: ['.tsx'],
				},
			],

			// Компоненты
			'react/function-component-definition': 'off',
			'react/display-name': 'off',
			'react/require-default-props': 'off',

			// Prop Types
			'react/prop-types': [
				1,
				{
					skipUndeclared: true,
				},
			],

			// Массивы и ключи
			'react/no-array-index-key': 'off',
		},
	}
}

/**
 * Получить все конфигурации React
 * @returns {import('./types.js').ESLintConfigItem[]}
 */
export function getReactConfig() {
	return [
		getReactHooksConfig(),
		getReactRefreshConfig(),
		getReactAdditionalRules(),
	]
}
