
<template>
  <div class="min-h-screen min-w-full bg-gray12 text-gray89">
    <div class="bg-gray5 h-14 flex sticky top-0 shadow-xl">
      <ClientOnly>
        <NavigationBar />
      </ClientOnly>
    </div>
    <div class="p-4 max-w-xl mx-auto">
      <NuxtPage />
    </div>
  </div>
</template>
