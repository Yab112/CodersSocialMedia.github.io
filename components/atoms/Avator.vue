<template>
    <div class="relative">
        <img
          :src="source"
          alt="Profile Picture"
          class="w-10 h-10 rounded-full bg-cover border border-gray-300 cursor-pointer"
        />
        <!-- Status Indicator -->
        <span
          class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white"
          :class="status === 'online' ? 'bg-green-500' : 'bg-gray-400'"
        ></span>
      </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
    source: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      validator: (value: string) => ['online', 'offline'].includes(value),
    },
  });
  </script>