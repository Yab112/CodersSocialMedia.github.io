<template>
    <div class="flex flex-col gap-3 dark:text-slate-200 text-gray-100">
      <!-- Suggestions Container with Fixed Width and Scrollable Content -->
      <div
        class="dark:bg-[#eeeeee] bg-[#000000] text-gray-100 dark:text-gray-900 max-h-[300px] w-[350px] overflow-y-scroll rounded-lg shadow-lg"
      >
        <Suggestions />
      </div>
  
      <!-- SuggestionsCourse Container -->
      <div
        class="dark:bg-[#eeeeee] bg-[#000000] text-gray-100 dark:text-gray-900 max-h-[300px] w-[350px] overflow-y-scroll rounded-lg shadow-lg"
      >
        <SuggestionsCourse />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Suggestions from '../molecules/Suggestions.vue';
  import SuggestionsCourse from '../molecules/SuggestionsCourse.vue';
  
  defineProps({
    
    suggestions:{
      type: Array,
      required: false,
    },
    courseSuggestions:{
      type:Array,
      required: false,
    }

  })
  </script>
  
  <style scoped>
  /* Optional: Customize scrollbar appearance */
  ::-webkit-scrollbar {
    width: 2px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #4720d6;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  </style>
  