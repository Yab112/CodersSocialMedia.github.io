<template>
    <h1 :class="customClass" :style="customStyles">{{ title }}</h1>
</template>
  
  <script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
    customStyles: {
      type: Object,
      default: () => ({}),
    },
  });
  </script>
  