<script setup lang="ts">
import { useTheme } from '@/common/composables/use-theme'

import { useWelcomeStore } from '@/modules/welcome/store/welcome.store'

const store = useWelcomeStore()
const { theme, toggleTheme } = useTheme()
</script>

<template>
    <section class="flex flex-col items-center gap-8 pt-24">
        <h1 class="text-3xl font-bold">Vue 3 Starter</h1>

        <div class="flex items-center gap-6">
            <button class="rounded-md border px-4 py-2" @click="store.decrement">−</button>
            <span class="w-12 text-center font-mono text-xl">{{ store.count }}</span>
            <button class="rounded-md border px-4 py-2" @click="store.increment">+</button>
        </div>

        <button class="rounded-md border px-4 py-2" @click="toggleTheme">Theme: {{ theme }}</button>
    </section>
</template>
