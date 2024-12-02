<!-- components/molecules/IconWithText.vue -->
<template>
  <div class="flex items-center space-x-2 bg-black dark:bg-slate-200">
    <Icon :icon="icon" :iconClass="iconClass" />
    <Text :text="label" :textClass="labelClass" />
  </div>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icons.vue';
import Text from '../atoms/Text.vue';

const props = defineProps({
  icon: {
    type: [Array, String], 
    required: true,
  },
  iconClass: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: true,
  },
  labelClass: {
    type: String,
    default: '',
  },
});
</script>
