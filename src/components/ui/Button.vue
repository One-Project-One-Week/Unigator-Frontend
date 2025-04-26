<script setup lang="ts">
interface ButtonProps {
    text: string
    disabled?: boolean
    loading?: boolean
    intent: 'primary' | 'secondary' | 'outline'
}

const props = withDefaults(defineProps<ButtonProps>(), {
    disabled: false,
    loading: false,
    intent: 'primary'
})
</script>

<template>
    <button :class="[
        'px-4  rounded-md transition-colors cursor-pointer',
        {
            'bg-blue-700 py-2.5 hover:bg-blue-500 text-white': intent === 'primary',
            'bg-gray-500 hover:bg-gray-600 text-white': intent === 'secondary',
            'border-2 py-2 border-blue-500 text-black hover:bg-blue-100 hover:text-black': intent === 'outline'
        },
        {
            'opacity-50 cursor-not-allowed': disabled,
            'cursor-wait': loading
        }
    ]" :disabled="disabled || loading">
        <span v-if="loading">Loading...</span>
        <span v-else>{{ text }}</span>
    </button>
</template>