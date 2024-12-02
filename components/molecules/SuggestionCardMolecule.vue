<template>
    <div class="flex justify-between items-center p-2">
      <div class="flex items-center gap-2">
        <Avator :source="source" :status="statusText" />
        <Text :text="name" class="text-gray-500 text-xl" />
      </div>
      <Button
        :text="buttonText"
        class="bg-gray-500 text-white px-4   rounded-md"
        @click="$emit('click')"
      />
    </div>
  </template>
  
  <script setup>
  import Avator from '../atoms/Avator.vue';
  import Button from '../atoms/Button.vue';
  import Text from '../atoms/Text.vue';
  
  const props = defineProps({
    source: { type: String, required: true },
    name: { type: String, required: true },
    statusText: { type: String, default: '' },
    buttonText: { type: String, default: 'Follow' },
  });
  </script>
  