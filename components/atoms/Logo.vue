<template>
    <img :src="source" :alt="alt" :class="class" />
</template>

<script>
import { defineProps } from 'vue';

const props = defineProps({
    source: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: false,
        default: '',
    },
    alt: {
        type: String,
        required: false,
        default: 'Logo',
    },
})
</script>