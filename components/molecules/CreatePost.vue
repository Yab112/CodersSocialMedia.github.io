<template>
        <div class="flex gap-3 bg-black dark:bg-slate-200 p-4 rounded-sm items-center ">
        <Text :text="text" class="my-auto cursor-pointer text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#4E4E4E] dark:text-slate-500"/>   
        <Icon :icon="icon" class="text-gray-300 dark:text-gray-500 my-auto cursor-pointer text-2xl" />
    </div>
</template>
<script setup lang="ts">
import Text from '~/components/atoms/Text.vue';
import Icon from '~/components/atoms/Icons.vue';
defineProps({
    icon: {
        type: [Array, String],
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

</script>