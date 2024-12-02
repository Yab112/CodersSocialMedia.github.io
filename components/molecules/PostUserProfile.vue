<template>
    <div class="flex gap-3">
      <!-- Profile Section -->
       <div class="flex flex-col gap-2 mt-2 cursor-pointer">
           <Avator :source="source" :name="name" :status="status" :statusText="statusText" />
       </div>
      <!-- Text and Icon Section -->
      <div class="flex flex-col gap-2 text-slate-300 dark:bg-slate-200">
        <Text :text="name" class="text-xl font-bold dark:text-gray-500 text-gray-200" />
        <TextWithIcon :icon="icon" :label="statusText" class="text-gray-400 text-sm" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Text from '~/components/atoms/Text.vue';
  import TextWithIcon from '~/components/molecules/TextWithIcon.vue'; 
  import Avator from '../atoms/Avator.vue';
  
  defineProps({
    icon: {
      type: [Array, String], 
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    statusText: {
      type: String,
      required: true,
    },
  });
  </script>
  