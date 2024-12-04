<template>
      <!-- Loop through each tag object and render the TagWithIcon component -->
      <div v-for="(tag, index) in props.tags" :key="index" class="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
        <Icon :icon="tag.icon" class="text-orange-400 text-xl shadow-2xl" />
        <Text class="text-gray-400" :text="tag.label" />
      </div>
  </template>
  
  <script setup lang="ts">
import Icon from '~/components/atoms/Icons.vue';
import Text from '../atoms/Text.vue';

interface Tag {
  icon: string | string[]; 
  label: string;
}

const props = defineProps<{
  tags: Tag[]; 
}>();

const emit = defineEmits(['tagClick']);

const handleClick = (tag: Tag) => {
  emit('tagClick', tag);
};

onMounted(() => {
  console.log('Tags:', props.tags);
});
</script>

  
  