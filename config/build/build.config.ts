// ============================================================================
// КОНФИГУРАЦИЯ СБОРКИ (BUILD)
// ============================================================================
// Настройки для команды `vite build` (npm run build)
// ============================================================================

import type { BuildOptions } from "vite";

/**
 * Получить конфигурацию сборки
 * @param mode - режим сборки ('development' | 'production')
 */
export function getBuildConfig(mode: string): BuildOptions {
  return {
    // Директория для сборки
    outDir: "build",

    // Директория для статических ассетов внутри outDir
    assetsDir: "assets",

    // Генерировать source maps для production
    // true - генерировать (удобно для дебага в production)
    // false - не генерировать (меньше размер, безопаснее)
    // 'hidden' - генерировать, но не добавлять ссылку в файлы
    sourcemap: mode === "development",

    // Минимальный размер файла для создания отдельного чанка (в байтах)
    // Файлы меньше этого размера будут инлайнены как base64
    assetsInlineLimit: 4096, // 4KB

    // Лимит предупреждения о размере чанка (в KB)
    chunkSizeWarningLimit: 500,

    // Очистить директорию сборки перед новой сборкой
    emptyOutDir: true,

    // Настройки Rollup/Rolldown (бандлер который использует Vite для production)
    rollupOptions: {
      output: {
        // ==================================================================
        // CODE SPLITTING - разделение кода на чанки
        // ==================================================================
        // Оптимизирует загрузку: браузер кэширует vendor библиотеки
        // отдельно от кода приложения
        //
        // manualChunks - функция для определения в какой чанк попадёт модуль
        // id - путь к модулю (например: /node_modules/react/index.js)
        // Возвращаем имя чанка или undefined (для стандартного поведения)
        // ==================================================================
        manualChunks(id: string): string | undefined {
          // Выделяем React в отдельный vendor чанк
          // Эти библиотеки редко обновляются, поэтому браузер будет кэшировать их
          if (id.includes("node_modules/react")) {
            return "vendor-react";
          }

          // Другие крупные библиотеки можно выделить отдельно:
          // if (id.includes('node_modules/react-router')) {
          //   return 'vendor-router'
          // }
          // if (id.includes('node_modules/@mui') || id.includes('node_modules/@emotion')) {
          //   return 'vendor-ui'
          // }

          // Все остальные node_modules в общий vendor чанк
          if (id.includes("node_modules")) {
            return "vendor";
          }

          // Явно возвращаем undefined для модулей приложения
          // (они будут обработаны стандартным алгоритмом Vite)
          return undefined;
        },

        // Формат имён файлов для лучшего кэширования
        // [hash] - хэш содержимого файла (меняется только при изменении кода)
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },

    // Целевые браузеры для сборки
    // Современные браузеры поддерживают ES2020+
    target: "es2020",

    // CSS code split - выделять CSS в отдельные файлы
    cssCodeSplit: true,

    // Минификация CSS
    cssMinify: true,

    // Минификация JS
    // В rolldown-vite используется встроенный минификатор oxc
    // true - включить минификацию (по умолчанию в production)
    // false - отключить минификацию
    // Примечание: 'esbuild' и 'terser' требуют отдельной установки пакетов
    minify: true,
  };
}
