<script setup lang="ts">
import { USERS } from "@/common/consts/users.ts";

const usersNames: string[] = USERS.map((item) => item.name);
</script>

<template>
    <header class="fixed top-0 right-0 left-0">
        <div class="mx-auto flex max-w-[50vw] items-center justify-between">
            <p class="text-bold text-white opacity-100">
                More information about users:
            </p>
            <nav class="flex h-20 items-center gap-10">
                <router-link
                    v-for="item in usersNames"
                    :key="item"
                    :to="{ name: 'About', params: { name: item } }"
                    class="text-lg font-bold hover:underline"
                >
                    {{ item }}
                </router-link>
                <router-link
                    :to="{ name: 'Welcome' }"
                    class="text-lg font-bold hover:underline"
                >
                    Home
                </router-link>
            </nav>
        </div>
    </header>
</template>

<style scoped></style>
