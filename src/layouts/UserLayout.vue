<template>
  <div class="flex min-h-screen flex-col bg-slate-100">
    <header class="bg-blue-600 text-white shadow-md">
      <div
        class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4"
      >
        <div class="flex items-center gap-4">
          <span class="text-xl font-bold">🛠️ 현장 작업 시스템</span>
          <nav class="hidden md:flex gap-4 text-sm font-medium">
            <a href="#" class="opacity-80 hover:opacity-100">작업 지시서</a>
            <a href="#" class="opacity-80 hover:opacity-100">설비 모니터링</a>
          </nav>
        </div>
        <div class="text-sm">김작업 님 (생산 1팀)</div>
      </div>
    </header>

    <main class="mx-auto mt-6 w-full max-w-7xl flex-1 px-4 pb-12">
      <div class="rounded-lg bg-white p-6 shadow-sm min-h-[500px]">
        <slot />
      </div>
    </main>

    <footer class="bg-slate-200 py-4 text-center text-xs text-slate-500">
      &copy; 2024 Smart Factory System. All rights reserved.
    </footer>
  </div>
</template>
