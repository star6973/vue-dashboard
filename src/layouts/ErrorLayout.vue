<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-white text-center"
  >
    <div class="mb-8 text-6xl">🚨</div>
    <slot />
    <button class="mt-8 text-blue-500 underline" @click="$router.push('/')">
      홈으로 돌아가기
    </button>
  </div>
</template>
