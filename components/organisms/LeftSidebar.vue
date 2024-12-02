<!-- components/organisms/Sidebar.vue -->
<template>
  <div class="dark:bg-[#eeeeee] bg-[#000000] text-gray-100 dark:text-gray-900 mx-auto min-h-screen gap-2
  ">

    <div class="flex items-center justify-center h-full  gap-2 p-12">
      <HeaderText :icon="['fas', 'code']" text="Share Code" class="my-auto cursor-pointer text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#4E4E4E] " />
    </div>

    <HorzontalLine width="3/4" color="text-red-400 ml-2" thickness="1" />

    <nav class="h-full  p-4 flex flex-col gap-3">
      <!-- Main Navigation -->
      <div class="space-y-6">
        <NavigationLink to="/" :icon="['fas', 'home']" class=" my-auto cursor-pointer text-xl text-white" text="Home" />
        <NavigationLink to="/" :icon="['fas', 'search']" class="my-auto cursor-pointer text-xl" text="Search" />
        <NavigationLink to="/" :icon="['fas', 'compass']" class=" my-auto cursor-pointer text-xl" text="Explore" />
        <NavigationLink to="/" :icon="['fas', 'user']" class=" my-auto cursor-pointer text-xl" text="Community" />
        <NavigationLink to="/" :icon="['fas', 'comments']" class=" my-auto cursor-pointer text-xl" text="Messages" />
        <NavigationLink to="/" :icon="['fas', 'plus-square']" class=" my-auto cursor-pointer text-xl" text="Post" />
      </div>


      <!-- Communities Section -->
       
      <Community />

      <!-- Settings Section -->
      <NavigationLink to="/" :icon="['fas', 'cog']" class=" my-auto cursor-pointer text-xl" text="Setting" />
    </nav>
  </div>
</template>

<script setup lang="ts">
import Community from '../molecules/Community.vue';
import NavigationLink from "../molecules/NavigationLink.vue";
import HeaderText from '../molecules/Headertext.vue';
import HorzontalLine from '../atoms/HorzontalLine.vue';
</script>
