<template>
  <Index/>
</template>

<script setup>
import { ref, provide } from 'vue';
import Index from './pages/index.vue';

const colorMode = ref('light'); 
const toggleDarkMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
};

// Provide `colorMode` and `toggleDarkMode` to all components
provide('colorMode', colorMode);
provide('toggleDarkMode', toggleDarkMode);
</script>
