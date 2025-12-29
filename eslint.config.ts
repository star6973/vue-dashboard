import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default tseslint.config(
  // 1. 공통 무시 설정 (Dist, Node_modules 등)
  {
    ignores: ["dist", "node_modules", "public", "**/*.d.ts"],
  },

  // 2. 기본 JS/TS 추천 규칙 확장
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. Vue.js 추천 규칙 (Essential보다 강력한 Recommended 사용)
  ...pluginVue.configs["flat/recommended"],

  // 4. 언어 옵션 및 전역 변수 설정
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node, // Vite 설정 파일 등을 위해 Node 환경 추가
      },
      parserOptions: {
        // Vue 파일 내부의 <script lang="ts">를 해석하기 위해 필요
        parser: tseslint.parser,
      },
    },
  },

  // 5. 커스텀 규칙 정의
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // Prettier 규칙을 위반하면 ESLint 에러로 표시
      "prettier/prettier": "error",

      // Vue 컴포넌트 이름 복합어 강제 규칙 해제 (Dashboard.vue 등 허용)
      "vue/multi-word-component-names": "off",

      // TypeScript any 사용 경고 (off 대신 warn으로 변경하여 안전장치 마련)
      "@typescript-eslint/no-explicit-any": "warn",

      // 사용하지 않는 변수 에러 (_로 시작하면 무시)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],

      // 콘솔 로그 남기기 (프로덕션에서는 경고)
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
  },

  // 6. Prettier 충돌 방지 설정 (반드시 가장 마지막에 위치)
  configPrettier,
);
