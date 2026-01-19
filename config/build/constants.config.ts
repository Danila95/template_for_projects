// ============================================================================
// КОНФИГУРАЦИЯ ГЛОБАЛЬНЫХ КОНСТАНТ
// ============================================================================
// Определение глобальных констант, которые заменяются на этапе сборки
// (dead code elimination)
// ============================================================================

/**
 * Получить определения глобальных констант
 * @param mode - режим сборки ('development' | 'production')
 */
export function getDefineConfig(
	mode: string
): Record<string, string | boolean> {
	return {
		// Версия приложения из package.json
		__APP_VERSION__: JSON.stringify(process.env.npm_package_version),

		// Пользовательская переменная из cross-env
		// Используется в скрипте: cross-env OTHER_ARG=props vite
		// Значение по умолчанию: 'default' если переменная не задана
		__GET_PROPS__: JSON.stringify(process.env.OTHER_ARG || 'default'),

		// Режим сборки
		__DEV__: mode === 'development',
		__PROD__: mode === 'production',
	}
}
