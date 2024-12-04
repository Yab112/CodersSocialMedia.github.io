<template>
  <div class="dark:bg-[#eeeeee] border-slate-300 bg-[#131212] text-gray-100 dark:text-gray-900 max-h-[150px] w-[260px] overflow-y-scroll rounded-lg shadow-lg">
    <Text :text="title" class="text-sm font-bold dark:text-gray-900 text-gray-400 p-2" />
    <div class="space-y-4 p-2">
      <NuxtLink v-for="(community, index) in communities" :key="index" to="/" class="block">
        <Text :text="community" class="text-sm font-bold dark:text-gray-500 text-gray-200" />
      </NuxtLink>
      <NuxtLink to="/" class="text-gray-400 text-sm hover:text-gray-300 mx-auto dark:gray-800 flex">
        See all
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Text from '~/components/atoms/Text.vue';

defineProps({
  title: {
    type: String,
    required: false,
  },
  communities: {
    type: Array as () => string[],
    required: true,
  },
});
</script>

<style scoped>
/* Optional: Customize scrollbar appearance */
::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-thumb {
  background-color: #4720d6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
