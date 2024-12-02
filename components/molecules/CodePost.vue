<template>
    <div class="bg-slate-300 rounded-lg overflow-hidden">
      <!-- Header -->
      <div class="flex justify-between items-center px-4 py-2 bg-[#2d2d2d] text-gray-400">
        <span class="text-sm">Code Snippet</span>
        <button
          @click="copyCode"
          class="flex items-center gap-2 text-sm hover:text-white transition-colors"
        >
          <i class="far fa-clipboard"></i>
          <span>{{ copyStatus }}</span>
        </button>
      </div>
  
      <!-- Code Content -->
      <div class="p-6 text-white font-mono text-sm leading-relaxed overflow-x-auto bg-[#0D0D0D]">
        <pre><code v-html="formattedCode"></code></pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Props to receive code snippet
  const props = defineProps({
    code: {
      type: String,
      required: true,
    },
  });
  
  // Copy status state
  const copyStatus = ref('Copy code');
  
  // Copy the code to clipboard
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(props.code);
      copyStatus.value = 'Copied!';
      setTimeout(() => {
        copyStatus.value = 'Copy code';
      }, 2000);
    } catch (err) {
      copyStatus.value = 'Failed to copy';
      setTimeout(() => {
        copyStatus.value = 'Copy code';
      }, 2000);
    }
  };
  
  // Optionally highlight the code (if you want to add syntax highlighting libraries later)
  const formattedCode = computed(() => {
    return props.code
      .replace(/</g, '&lt;') // Escape HTML
      .replace(/>/g, '&gt;');
  });
  </script>
  
  <style scoped>
  /* Add any required custom styles */
  </style>
  