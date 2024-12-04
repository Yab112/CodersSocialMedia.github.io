<template>
    <div class="flex items-center relative gap-2">
      <!-- Profile Picture -->
      <AtomsAvator :source="source" :status="status" />
      <div class="flex flex-col cursor-pointer">  
        <h2 class="text-sm font-semibold text-gray-100 dark:text-gray-950 text">{{ name }}</h2>
        <p class="text-xs text-gray-200 dark:text-gray-400">{{ statusText }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  // Define props for the component
  defineProps({
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
      validator: (value: string) => ['online', 'offline'].includes(value),
    },
    statusText: {
      type: String,
      required: true,
    },
  });
  </script>
  
  