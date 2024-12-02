<template>
    <hr 
      :class="[
        customClass,
        `border-${color}`,
        `border-${thickness}`,
        `w-${width}`
      ]"
    />
  </template>
  
  <script setup lang="ts">
  defineProps({
    color: {
      type: String,
      default: 'gray-300', // Tailwind color class
    },
    thickness: {
      type: String,
      default: '2',
    },
    width: {
      type: String,
      default: 'full', 
    },
    customClass: {
      type: String,
      default: '',
    },
  });
  </script>
  
  <style scoped>
  /* Additional custom styling (if needed) */
  </style>
  