// ============================================================================
// КОНФИГУРАЦИЯ ГЛОБАЛЬНЫХ ПЕРЕМЕННЫХ
// ============================================================================
// Определение глобальных переменных для разных окружений
// ============================================================================

import globals from 'globals'

/**
 * Получить глобальные переменные для браузера
 * @returns {import('./types.js').Globals}
 */
export function getBrowserGlobals() {
	return globals.browser
}

/**
 * Получить глобальные переменные для Node.js
 * @returns {import('./types.js').Globals}
 */
export function getNodeGlobals() {
	return globals.node
}

/**
 * Получить пользовательские глобальные переменные
 * Определяются через vite.config.ts -> define
 * @returns {import('./types.js').Globals}
 */
export function getCustomGlobals() {
	return {
		// Глобальные константы из Vite конфигурации
		__APP_VERSION__: 'readonly',
		__GET_PROPS__: 'readonly',
		__DEV__: 'readonly',
		__PROD__: 'readonly',

		// Глобальные константы из старого проекта (если используются)
		__IS_DEV__: 'readonly',
		__ENV__: 'readonly',
		__PROJECT__: 'readonly',
	}
}

/**
 * Получить все глобальные переменные
 * @returns {import('./types.js').Globals}
 */
export function getAllGlobals() {
	return {
		...getBrowserGlobals(),
		...getCustomGlobals(),
	}
}
