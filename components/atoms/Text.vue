<template>
  <p :class="class">{{text}}</p>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: '',
  },
});
</script>
