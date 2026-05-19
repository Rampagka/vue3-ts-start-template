<script setup lang="ts">
defineProps<{
    className?: string
}>()
</script>

<template>
    <button :class="['h-7 w-7', className]">
        <span class="block h-full w-full">
            <slot />
        </span>
    </button>
</template>
