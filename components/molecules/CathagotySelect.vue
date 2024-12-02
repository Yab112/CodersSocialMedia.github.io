<template>
  <div class="relative">
    <select
      id="category-select"
      v-model="selectedCategory"
      class="w-full px-24 py-4 mt-2 text-gray-700 dark:text-gray-200 border rounded-md focus:outline-none focus:ring-2"
      :class="darkMode ? 'border-slate-400 bg-slate-800' : 'border-slate-500 bg-white'"
    >
      <option
        v-for="(item, index) in items"
        :key="index"
        :value="item.value"
        class="bg-transparent hover:bg-slate-700 dark:hover:bg-slate-200"
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
select {
  background-color: inherit; 
  color: inherit; 
  border-radius: 0.375rem; 
}

option {
  background-color: white;
  color: black; 
}

select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(100, 100, 100, 0.5);
}

option:hover {
  transition: background-color 0.2s ease-in-out;
  background-color: #d1d5db; 
}

.dark select {
  background-color: #1f2937; 
  color: #d1d5db; 
}

.dark option {
  background-color: #1f2937; 
  color: #d1d5db; 
}

.dark option:hover {
  background-color: #374151; 
}
</style>
