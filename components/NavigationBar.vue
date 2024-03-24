<script setup lang="ts">
const windowWidth = ref(window.innerWidth);
const isVisible = ref(false)

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
  setTimeout(() => isVisible.value = true, 50)
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<template>
    <nav 
        class="transition-opacity duration-500 w-full" 
        :class="{
            'opacity-0': !isVisible,
            'opacity-100': isVisible 
        }"
    >
        <MobileNavigationBar v-if="windowWidth < 640" />
        <DesktopNavigationBar v-else />
    </nav>
</template>