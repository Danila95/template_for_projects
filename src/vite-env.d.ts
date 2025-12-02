/// <reference types="vite/client" />

// ============================================================================
// ТИПЫ ДЛЯ ПЕРЕМЕННЫХ ОКРУЖЕНИЯ
// ============================================================================
// Этот файл добавляет TypeScript типизацию для import.meta.env
// Все переменные с префиксом VITE_ автоматически доступны в коде
// ============================================================================

interface ImportMetaEnv {
  // Стандартные переменные Vite
  readonly MODE: string
  readonly BASE_URL: string
  readonly PROD: boolean
  readonly DEV: boolean
  readonly SSR: boolean

  // Настройки сервера
  readonly VITE_PORT: string
  readonly VITE_PREVIEW_PORT: string

  // API настройки
  readonly VITE_API_URL: string
  readonly VITE_API_BASE_URL: string

  // Приложение
  readonly VITE_BASE_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_MODE: string

  // Feature flags
  readonly VITE_FEATURE_NEW_DASHBOARD: string
  readonly VITE_FEATURE_DARK_MODE: string

  // Добавляйте свои переменные здесь:
  // readonly VITE_YOUR_VARIABLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// ============================================================================
// ГЛОБАЛЬНЫЕ КОНСТАНТЫ (определены в vite.config.ts -> define)
// ============================================================================

declare const __APP_VERSION__: string
declare const __DEV__: boolean
declare const __PROD__: boolean

