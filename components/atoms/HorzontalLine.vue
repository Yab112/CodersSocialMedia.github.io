<template>
  <hr 
    :class="[
      customClass,
      `border-${thickness}`,   // Set the border thickness (e.g., '1', '2', '4', etc.)
      `border-${color}`,       // Set the border color (Tailwind CSS color classes)
      `w-${width}`,            // Set the width of the <hr> (e.g., 'full', '3/4', '1/2')
      'border-solid'           // Ensure the border style is solid (important for visibility)
    ]"
  />
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'gray-300', // Default color class (Tailwind)
  },
  thickness: {
    type: String,
    default: '2',        // Default thickness class (Tailwind)
  },
  width: {
    type: String,
    default: 'full',     // Default width class (Tailwind)
  },
  customClass: {
    type: String,
    default: '',         // Default empty string for custom classes
  },
});
</script>

<style scoped>
/* Additional custom styling (if needed) */
</style>
