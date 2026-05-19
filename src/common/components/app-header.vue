<script setup lang="ts"></script>

<template>
    <header class="fixed top-0 right-0 left-0">
        <div class="mx-auto flex max-w-[1100px] items-center justify-between">
            <nav class="flex h-20 items-center gap-10">
                <router-link :to="{ name: 'Welcome' }" class="text-lg font-bold hover:underline">
                    Home
                </router-link>
            </nav>
        </div>
    </header>
</template>
