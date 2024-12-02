<template>
    <NuxtLink to="link" class="flex items-center space-x-3 hover:text-gray-300">
      <Icon :icon="icon" class="my-auto cursor-pointer text-4xl" />
      <span>{{ label }}</span>
    </NuxtLink>
  </template>
  
  <script setup lang="ts">
  import Icon from "../atoms/Icons.vue";
  
  defineProps({
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: [Array, String],
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  });
  </script>
  