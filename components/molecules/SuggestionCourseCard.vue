<template>
    <div    
      class=" dark:bg-gray-200 p-2 rounded-md shadow-md cursor-pointer hover:bg-gray-950 dark:hover:bg-gray-300 transition-colors"
      @click="$emit('click')"
    >
      <p class="text-sm font-medium">{{ text }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    text: { type: String, required: true },
  });
  </script>
  