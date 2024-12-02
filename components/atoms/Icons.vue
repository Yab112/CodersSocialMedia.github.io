<template>
    <font-awesome-icon 
      v-if="condition" 
      :icon="icon" 
      :class="class"
      :style="customStyles"
    />
  </template>
  <script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  defineProps({
    
    icon: {
      type: [Array, String], 
      required: true,
    },
    
    class: {
      type: String,
      default: '', 
    },
    
    customStyles: {
      type: Object,
      default: () => ({}),
    },
    
    condition: {
      type: Boolean,
      default: true,
    },
  });
  </script>
  