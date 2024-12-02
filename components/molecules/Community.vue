<template>
     <div
        class="dark:bg-[#eeeeee] bg-[#000000] text-gray-100 dark:text-gray-900 max-h-[150px] w-[350px] overflow-y-scroll rounded-lg shadow-lg"
      >
        <Text text="My communities " class="text-sm font-bold dark:text-gray-900 text-gray-400" />
        <div class="space-y-4 p-4">
          <NuxtLink v-for="i in 3" :key="i" to="/" class="block">
            <Text text="Community-i " class="text-sm font-bold dark:text-gray-500 text-gray-200" />
          </NuxtLink>
          <NuxtLink to="/" class=" text-gray-400 text-sm hover:text-gray-300 mx-auto dark:gray-800 flex">
            See all
          </NuxtLink>
        </div>
      </div>
</template>
<script  setup lang="ts">
import Text from '~/components/atoms/Text.vue';
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