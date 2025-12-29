<template>
  <div class="flex h-screen w-full overflow-hidden bg-gray-50">
    <aside class="w-64 flex-shrink-0 bg-slate-800 text-white transition-all">
      <div class="p-4 font-bold text-xl border-b border-slate-700">
        🏭 Admin System
      </div>
      <nav class="p-4">
        <ul>
          <li class="mb-2 p-2 bg-slate-700 rounded cursor-pointer">대시보드</li>
          <li class="p-2 hover:bg-slate-700 rounded cursor-pointer">
            설비 관리
          </li>
        </ul>
      </nav>
    </aside>

    <div class="flex flex-1 flex-col overflow-hidden">
      <header
        class="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm"
      >
        <h2 class="text-lg font-semibold text-gray-800">관리자 모드</h2>
        <div class="flex gap-4">
          <button class="text-sm text-gray-500 hover:text-blue-600">
            내 정보
          </button>
          <button class="text-sm text-red-500 hover:text-red-700">
            로그아웃
          </button>
        </div>
      </header>

      <main class="flex-1 overflow-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
