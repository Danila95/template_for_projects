// ============================================================================
// КОНФИГУРАЦИЯ CSS
// ============================================================================
// Настройки модулей CSS и препроцессоров
// ============================================================================

import type { CSSOptions } from 'vite'

/**
 * Получить конфигурацию CSS
 * @param mode - режим сборки ('development' | 'production')
 */
export function getCssConfig(mode: string): CSSOptions {
	return {
		// Настройки модулей CSS (*.module.css)
		modules: {
			// Формат генерируемых имён классов
			// В development: понятные имена для дебага
			// В production: короткие хэши для минимального размера
			generateScopedName:
				mode === 'development'
					? '[name]__[local]__[hash:base64:5]'
					: '[hash:base64:8]',

			// Включать глобальные стили (начинающиеся с :global)
			localsConvention: 'camelCaseOnly',
		},

		// Настройки препроцессоров (если используете SCSS/SASS/Less)
		preprocessorOptions: {
			// Пример для SCSS:
			// scss: {
			//   // Автоматически импортировать переменные/миксины во все файлы
			//   additionalData: `@import "@/styles/variables.scss";`,
			// },
		},

		// Включить CSS source maps в development
		devSourcemap: true,
	}
}
