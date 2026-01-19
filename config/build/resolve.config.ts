// ============================================================================
// КОНФИГУРАЦИЯ РАЗРЕШЕНИЯ ПУТЕЙ (RESOLVE)
// ============================================================================
// Настройка алиасов для удобного импорта модулей
// Вместо: import Component from '../../../components/Button'
// Можно:  import Component from '@/components/Button'
//
// ВАЖНО: Для работы с TypeScript нужно также настроить paths в tsconfig.json
// ============================================================================

import path from "path";
import type { AliasOptions } from "vite";

/**
 * Получить конфигурацию алиасов путей
 * '@' указывает на папку src - самый популярный паттерн
 */
export function getResolveConfig(): { alias: AliasOptions } {
  return {
    alias: {
      // '@' указывает на папку src - самый популярный паттерн
      "@": path.resolve(__dirname, "../../src"),

      // Дополнительные алиасы для крупных проектов:
      // '@components': path.resolve(__dirname, '../../src/components'),
      // '@hooks': path.resolve(__dirname, '../../src/hooks'),
      // '@utils': path.resolve(__dirname, '../../src/utils'),
      // '@assets': path.resolve(__dirname, '../../src/assets'),
      // '@styles': path.resolve(__dirname, '../../src/styles'),
      // '@api': path.resolve(__dirname, '../../src/api'),
      // '@store': path.resolve(__dirname, '../../src/store'),
      // '@types': path.resolve(__dirname, '../../src/types'),
    },
  };
}
