<template>
    <div class="flex  my-auto justify-center gap-4">
        <Icon :icon="icon" class="text-gray-300 dark:text-gray-500 my-auto cursor-pointer" />
        <Text :text="text" class="class" />
    </div>
</template>
<script setup lang="ts">
import Icon from '../atoms/Icons.vue';
import Text from '../atoms/Text.vue';

defineProps({

    icon: {
        type: [Array, String],
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    customClass: {
        type: String,
        required: false,
    },
});

</script>