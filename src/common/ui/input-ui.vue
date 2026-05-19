<script setup lang="ts">
import type { IBaseInput } from '@/common/models/interfaces/input.interface.ts'
import type { InputValue } from '@/common/models/types/input.type.ts'

defineProps<IBaseInput>()

const modelValue = defineModel<InputValue>({ required: true })
</script>

<template>
    <input
        :type="type ?? 'text'"
        :placeholder="placeholder ?? ''"
        :disabled="disabled"
        class="text-main-text w-full bg-transparent text-[15px] outline-none"
        v-model="modelValue"
    />
</template>
