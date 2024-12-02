<template>
  <NuxtLink :to="to" class="flex items-center space-x-3 hover:text-gray-500 justify-start p-1 ">
    <Icon :icon="icon" class="text-gray-500 my-auto cursor-pointer"/>
    <Text :text="text" class="class" />
  </NuxtLink>
</template>

<script setup lang="ts">
import Icon from "../atoms/Icons.vue";
import Text from "../atoms/Text.vue";

defineProps({
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: [Array, String],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  class:
  {
    type: String,
    default: '',
  },
});
</script>
