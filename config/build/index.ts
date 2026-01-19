// ============================================================================
// ГЛАВНЫЙ МОДУЛЬ КОНФИГУРАЦИИ VITE
// ============================================================================

import type { UserConfig } from 'vite'
import type { ConfigContext } from './types'

// Импорт модулей конфигурации
import { loadEnvironment, getEnvPrefix } from './env.config'
import { getPluginsConfig } from './plugins.config'
import { getResolveConfig } from './resolve.config'
import { getServerConfig } from './server.config'
import { getPreviewConfig } from './preview.config'
import { getBuildConfig } from './build.config'
import { getCssConfig } from './css.config'
import { getOptimizationConfig } from './optimization.config'
import { getDefineConfig } from './constants.config'
import { buildProps } from './buildProps'

// ============================================================================
// СОЗДАНИЕ КОНФИГУРАЦИИ VITE
// ============================================================================
// Централизованная функция для создания конфигурации
// Принимает контекст (mode, command) и возвращает полную конфигурацию
// ============================================================================

/**
 * Создать конфигурацию Vite из модулей
 * @param context - контекст конфигурации (mode, command)
 * @returns полная конфигурация Vite
 */
export function createViteConfig(context: ConfigContext): UserConfig {
	const { mode } = context

	const otherArg = process.env.OTHER_ARG

	if (otherArg) {
		// eslint-disable-next-line no-console
		console.log(`IS Arg: ${otherArg}\n`)

		if (otherArg === 'props') {
			buildProps()
		}
	}

	// ==========================================================================
	// ЗАГРУЗКА ПЕРЕМЕННЫХ ОКРУЖЕНИЯ
	// ==========================================================================
	const env = loadEnvironment(mode)

	// ==========================================================================
	// СБОРКА КОНФИГУРАЦИИ ИЗ МОДУЛЕЙ
	// ==========================================================================
	return {
		// Плагины
		plugins: getPluginsConfig(),

		// Разрешение путей (алиасы)
		resolve: getResolveConfig(),

		// Сервер разработки
		server: getServerConfig(env),

		// Сервер превью
		preview: getPreviewConfig(env),

		// Настройки сборки
		build: getBuildConfig(mode),

		// Настройки CSS
		css: getCssConfig(mode),

		// Оптимизация зависимостей
		optimizeDeps: getOptimizationConfig(),

		// Глобальные константы
		define: getDefineConfig(mode),

		// ========================================================================
		// ДОПОЛНИТЕЛЬНЫЕ НАСТРОЙКИ
		// ========================================================================

		// Префикс для переменных окружения в клиентском коде
		envPrefix: getEnvPrefix(),

		// Уровень логирования: 'info' | 'warn' | 'error' | 'silent'
		logLevel: 'info',

		// Очистить терминал при запуске сервера
		clearScreen: true,

		// ========================================================================
		// БАЗОВЫЙ ПУТЬ
		// ========================================================================
		// Путь к приложению от корня домена
		// '/' - корень (https://example.com/)
		// '/app/' - поддиректория (https://example.com/app/)
		//
		// ВАЖНО для деплоя на GitHub Pages, Vercel subdirectory и т.д.
		// ========================================================================
		base: env.VITE_BASE_URL || '/',

		// ========================================================================
		// ПУБЛИЧНАЯ ДИРЕКТОРИЯ
		// ========================================================================
		// Файлы из этой директории копируются в корень public без обработки
		// Полезно для: favicon.ico, robots.txt, manifest.json
		// ========================================================================
		publicDir: 'public',

		// ========================================================================
		// КЭШИРОВАНИЕ
		// ========================================================================
		// Директория для кэша Vite
		// ========================================================================
		cacheDir: 'node_modules/.vite',
	}
}

// ============================================================================
// ЭКСПОРТ ВСЕХ КОНФИГУРАЦИОННЫХ ФУНКЦИЙ
// ============================================================================
// Позволяет импортировать отдельные функции для кастомизации
// ============================================================================

export {
	// Типы
	type ConfigContext,
	type EnvVariables,
} from './types'

export {
	// Переменные окружения
	loadEnvironment,
	getEnvPrefix,
} from './env.config'

export {
	// Плагины
	getPluginsConfig,
} from './plugins.config'

export {
	// Разрешение путей
	getResolveConfig,
} from './resolve.config'

export {
	// Сервер разработки
	getServerConfig,
} from './server.config'

export {
	// Сервер превью
	getPreviewConfig,
} from './preview.config'

export {
	// Сборка
	getBuildConfig,
} from './build.config'

export {
	// CSS
	getCssConfig,
} from './css.config'

export {
	// Оптимизация
	getOptimizationConfig,
} from './optimization.config'

export {
	// Константы
	getDefineConfig,
} from './constants.config'
