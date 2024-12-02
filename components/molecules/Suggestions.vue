<template>
    <div class="flex flex-col gap-1">
      <div class="flex flex-col gap-2">
        <Text
          :text="`Suggestions`"
          class="text-xl font-bold text-gray-100 dark:text-gray-900 ml-2"
        />
        <HorzontalLine
          width="3/4"
          color="text-red-400 ml-2 mt-2"
          thickness="1"
        />
      </div>
  
      <!-- Use v-for to dynamically render SuggestionCardMolecule -->
      <SuggestionCardMolecule
        v-for="(suggestion, index) in suggestions"
        :key="index"
        :source="suggestion.source"
        :name="suggestion.name"
        :statusText="suggestion.statusText"
        :buttonText="suggestion.buttonText"
        @click="handleClick(suggestion)"
      />
  
      <Text
        :text="`See All`"
        class="text-sm font-bold text-gray-600 dark:text-gray-900 ml-2 cursor-pointer hover:text-slate-100"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import Text from "../atoms/Text.vue";
  import HorzontalLine from "../atoms/HorzontalLine.vue";
  import SuggestionCardMolecule from "../molecules/SuggestionCardMolecule.vue";
  
  // Array of suggestion data
  const suggestions = [
    {
      source: "/yabprofile.jpg",
      name: "John Doe",
      statusText: "online",
      buttonText: "Connect",
    },
    {
      source: "/yabprofile.jpg",
      name: "Jane Smith",
      statusText: "busy",
      buttonText: "Connect",
    },
    {
      source: "/yabprofile.jpg",
      name: "Jane Smith",
      statusText: "busy",
      buttonText: "Connect",
    },
    {
      source: "/yabprofile.jpg",
      name: "Jane Smith",
      statusText: "busy",
      buttonText: "Connect",
    },
    {
      source: "/yabprofile.jpg",
      name: "Jane Smith",
      statusText: "busy",
      buttonText: "Connect",
    },
    {
      source: "/yabprofile.jpg",
      name: "Michael Lee",
      statusText: "offline",
      buttonText: "Connect",
    },
    {
      source: "/yabprofile.jpg",
      name: "Emily Davis",
      statusText: "online",
      buttonText: "Connect",
    },
  ];
  
  // Handle button click
  const handleClick = (suggestion: { name: string; statusText: string; buttonText: string }) => {
    console.log("Button clicked for:", suggestion);
  };  </script>
  