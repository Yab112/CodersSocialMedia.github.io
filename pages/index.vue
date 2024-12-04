<template>
    <div class="flex w-full min-h-screen bg-[#202020] dark:bg-gray-400">
      <!-- Fixed Left Sidebar -->
      <div class="w-[350px] h-full fixed top-0 left-0 bg-[#202020] dark:bg-gray-400">
        <LeftSidebar />
      </div>
  
      <!-- Main Content Area -->
      <div class="w-3/4 ml-2/4 flex flex-col gap-4">
        <!-- Fixed Header -->
        <div class="h-16 fixed top-0 left-[370px] w-3/4 bg-[#202020] dark:bg-gray-500 z-10 ">
          <Header />
        </div>
  
        <!-- Main Content -->
        <div class="mt-16 flex gap-4 h-full">
          <!-- Middle Section (Scrollable) -->
          <div class="w-3/4 p-2 overflow-y-auto  my-8 ml-[360px]">
            <middleSide />
          </div>
  
          <!-- Fixed Right Sidebar -->
          <div class="w-1/4 h-full fixed top-16 -right-2 bg-[#202020] dark:bg-gray-400 p mt-12">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import LeftSidebar from '~/components/organisms/LeftSidebar.vue';
  import Header from '~/components/organisms/Header.vue';
  import RightSide from '~/components/organisms/rightSide.vue';
  import middleSide from '~/components/organisms/middleSide.vue';
  </script>
