<template>
  <div class="relative">
    <select
      id="category-select"
      v-model="selectedCategory"
      class="w-full px-24 py-4 mt-2 text-gray-700 dark:text-gray-900 dark:border-slate-300   bg-transparent border rounded-md focus:outline-none focus:ring-2"
      :class="darkMode ? 'border-slate-400' : 'border-slate-500'"
    >
      <option
        v-for="(item, index) in items"
        :key="index"
        :value="item.value"
        class="bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 dark:bg-transparent text-gray-900 dark:text-gray-200"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const selectedCategory = ref(props.items[0]?.value || ''); 
const colorMode = useColorMode(); 
const darkMode = computed(() => colorMode.value === 'dark'); 
</script>

<style scoped>

select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); 
}


option:hover {
  transition: background-color 0.2s ease-in-out;
}
</style>
