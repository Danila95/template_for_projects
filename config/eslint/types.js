// ============================================================================
// ТИПЫ ДЛЯ КОНФИГУРАЦИИ ESLINT
// ============================================================================
// Централизованные типы для всех модулей ESLint конфигурации
// Документация: https://eslint.org/docs/latest/use/configure/
// ============================================================================

/**
 * @typedef {import('eslint').Linter.Config[]} ESLintConfig
 * Тип конфигурации ESLint (Flat Config)
 * ESLint v9+ использует новый формат конфигурации
 */

/**
 * @typedef {import('eslint').Linter.Config} ESLintConfigItem
 * Одна конфигурация ESLint
 */

/**
 * @typedef {import('eslint').Linter.RulesRecord} ESLintRules
 * Правила ESLint
 */

/**
 * @typedef {import('eslint').Linter.LanguageOptions} LanguageOptions
 * Настройки языка
 */

/**
 * @typedef {Record<string, boolean | 'readonly' | 'writable'>} Globals
 * Глобальные переменные
 */

// Экспортируем пустой объект для совместимости с ES модулями
export {}
