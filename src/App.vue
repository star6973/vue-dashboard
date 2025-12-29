<script setup lang="ts">
import { useRoute } from "vue-router";
import { layouts } from "@/layouts";
import type { LayoutKey } from "@/layouts";

const route = useRoute();

// 현재 라우트의 meta.layout 값을 감지하여 컴포넌트 결정
const layout = computed(() => {
  const layoutName = (route.meta.layout as LayoutKey) || "auth"; // 기본값은 auth 또는 user
  return layouts[layoutName];
});
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style>
/* Transition 효과를 주고 싶다면 여기에 추가 */
</style>
