import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: "src/components.d.ts",
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
        {
          pinia: ["defineStore", "storeToRefs", "acceptHMRUpdate"],
        },
      ],
      dirs: ["src/stores/**", "src/composables/**"],
      dts: "src/auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
