<template>
    <div class="flex flex-col gap-1">
      <Text
        :text="`Suggestions for you`"
        class="text-xl font-bold text-gray-300 dark:text-gray-900 bg-transparent"
      />
      <div class="flex flex-col gap-2">
        <SuggestionCourseCard
          v-for="(suggestion, index) in suggestions"
          :key="index"
          :text="suggestion"
          @click="handleClick(suggestion)"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Text from "../atoms/Text.vue";
  import SuggestionCourseCard from "../molecules/SuggestionCourseCard.vue";
  
  // Array of suggestion data
  const suggestions = [
    "Payment gateway integration (Stripe/PayPal).",
    "Product filtering and search functionality.",
    "Pre-designed templates to choose from.",
    "User authentication and account management.",
    "Integration with APIs like OpenWeather for outdoor workout suggestions.",
    "Integration with APIs like OpenWeather for outdoor workout suggestions.",
  ];
  
  // Handle button click
  const handleClick = (suggestion: string) => {
    console.log("Suggestion clicked:", suggestion);
  };
  </script>
  