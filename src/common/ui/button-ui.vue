<script setup lang="ts">
defineProps<{
    isDisabled?: boolean
}>()
</script>

<template>
    <button
        class="flex h-11 items-center justify-center gap-[5px] rounded-md px-4 text-sm leading-[16px] font-medium"
        :disabled="isDisabled"
    >
        <slot />
    </button>
</template>
