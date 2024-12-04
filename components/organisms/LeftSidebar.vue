<template>
  <div class="dark:bg-[#eeeeee] bg-[#000000] text-gray-100 dark:text-gray-900 mx-auto min-h-screen">
    <!-- Header Section -->
    <div class="flex items-center justify-center h-[10%] gap-4 p-8">
      <HeaderText 
        :icon="['fas', 'code']" 
        text="Share Code" 
        class="my-auto cursor-pointer text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#4E4E4E]" 
      />
    </div>

    <HorzontalLine width="3/4" color="text-red-400 ml-2" thickness="1" />

    <!-- Navigation Section -->
    <nav class="p-6 flex flex-col justify-between min-h-[80%]">
      <!-- Main Navigation Links -->
      <div class="space-y-4">
        <NavigationLink 
          to="/" 
          :icon="['fas', 'home']" 
          class="my-auto cursor-pointer text-xl text-white hover:text-red-400 transition-colors duration-200" 
          text="Home" 
        />
        <NavigationLink 
          to="/" 
          :icon="['fas', 'search']" 
          class="my-auto cursor-pointer text-xl hover:text-red-400 transition-colors duration-200" 
          text="Search" 
        />
        <NavigationLink 
          to="/" 
          :icon="['fas', 'compass']" 
          class="my-auto cursor-pointer text-xl hover:text-red-400 transition-colors duration-200" 
          text="Explore" 
        />
        <NavigationLink 
          to="/" 
          :icon="['fas', 'user']" 
          class="my-auto cursor-pointer text-xl hover:text-red-400 transition-colors duration-200" 
          text="Community" 
        />
        <NavigationLink 
          to="/" 
          :icon="['fas', 'comments']" 
          class="my-auto cursor-pointer text-xl hover:text-red-400 transition-colors duration-200" 
          text="Messages" 
        />
        <NavigationLink 
          to="/" 
          :icon="['fas', 'plus-square']" 
          class="my-auto cursor-pointer text-xl hover:text-red-400 transition-colors duration-200" 
          text="Post" 
        />
      </div>

      <!-- Communities Section -->
      <Community 
        :title="'My Communities'" 
        :communities="communityList" 
        class="mt-12"
      />

      <!-- Settings Section -->
      <NavigationLink 
        to="/" 
        :icon="['fas', 'cog']" 
        class="my-auto cursor-pointer text-xl hover:text-red-400 transition-colors duration-200 mt-12" 
        text="Setting" 
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
import Community from '../molecules/Community.vue';
import NavigationLink from '../molecules/NavigationLink.vue';
import HeaderText from '../molecules/Headertext.vue';
import HorzontalLine from '../atoms/HorzontalLine.vue';

// Define props
defineProps({
  communityList: {
    type: Array,
    required: false,
    default: () => [
      'Tech Enthusiasts',
      'Vue.js Developers',
      'Frontend Masters',
      'JavaScript Ninjas',
    ],
  },
});
</script>
