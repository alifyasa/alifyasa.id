<script setup lang="ts">
    import { ref } from 'vue';
    const showNavBar = ref(false)
    const toggleNavBar = () => { 
        showNavBar.value = !showNavBar.value 
    }
</script>

<template>
    <div class="flex justify-end h-full w-full px-4">
        <button class="my-auto" @click="toggleNavBar">
            <span v-if="!showNavBar" class="material-symbols-outlined text-3xl block">
                menu
            </span>
            <span v-else class="material-symbols-outlined text-3xl block">
                expand_less
            </span>
        </button>
    </div>
    <ul v-if="showNavBar" class="flex flex-col text-lg justify-between align-middle w-full bg-gray5 z-10 relative top-0 px-4 py-2 border-y border-gray89">
        <li class="flex pl-2 pb-2 mb-2 border-b border-gray89">
            <a class="flex items-center justify-start w-full" href="/">Home</a>
        </li>
        <li class="flex pl-2 pb-2 mb-2 border-b border-gray89">
            <a class="flex items-center justify-start w-full" href="/projects">Projects</a>
        </li>
        <li class="flex pl-2">
            <a class="flex items-center justify-start w-full" href="/about-me">About Me</a>
        </li>
    </ul>
</template>