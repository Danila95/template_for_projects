// ============================================================================
// КОНФИГУРАЦИЯ СЕРВЕРА ПРЕВЬЮ (PREVIEW)
// ============================================================================
// Настройки для команды `vite preview` (просмотр production сборки)
// ============================================================================

import type { PreviewOptions } from "vite";
import type { EnvVariables } from "./types";

/**
 * Получить конфигурацию preview сервера
 * @param env - переменные окружения
 */
export function getPreviewConfig(env: EnvVariables): PreviewOptions {
  return {
    // Порт preview сервера
    port: env.VITE_PREVIEW_PORT ? parseInt(env.VITE_PREVIEW_PORT, 10) : 4173,

    // Автоматически открывать браузер
    open: true,

    // Доступ из локальной сети
    host: true,
  };
}
