<script setup lang="ts">
import AppHeader from '@/common/components/app-header.vue'
</script>

<template>
    <app-header></app-header>
    <div class="mx-auto max-w-[1100px]">
        <router-view />
    </div>
</template>
