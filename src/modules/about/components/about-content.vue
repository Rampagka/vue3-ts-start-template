<script setup lang="ts">
import { useAboutStore } from '@/modules/about/store/about.store.ts'

import { storeToRefs } from 'pinia'

const aboutStore = useAboutStore()

const { user } = storeToRefs(aboutStore)
</script>

<template>
    <div class="flex h-full flex-col items-center justify-between">
        <div class="flex flex-col items-center gap-10">
            <div class="flex items-center gap-10">
                <img :src="user.image" alt="" class="h-50 w-50 rounded-full" />
                <h1
                    class="text-center text-6xl"
                    :class="{ 'text-orange-300': user.name === 'Claude' }"
                >
                    {{ user.name }}
                </h1>
            </div>
            <p class="text-center">{{ user.description }}</p>
        </div>
        <ul class="item-center flex gap-10 py-10">
            <li v-for="link in user.links" :key="link.label">
                <a
                    :href="link.path"
                    target="_blank"
                    class="text-lg font-bold text-orange-300 hover:underline"
                >
                    {{ link.label }}</a
                >
            </li>
        </ul>
    </div>
</template>
