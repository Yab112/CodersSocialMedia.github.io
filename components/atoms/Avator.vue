<template>
  <div
    class="relative"
    :class="{
      'w-10 h-10': size === 'small',
      'w-16 h-16': size === 'medium',
      'w-20 h-20': size === 'large',
    }"
  >
    <img
      :src="source"
      alt="profile"
      class="rounded-full bg-cover border cursor-pointer"
      :class="borderColor"
    />
    <span
      class="absolute bottom-0 right-0 rounded-full"
      :class="[
        `border-${indicatorBorderWidth}`,
        status === 'online' ? 'bg-green-500' : 'bg-gray-400',
      ]"
      :style="{ width: size === 'small' ? '8px' : size === 'large' ? '12px' : '10px', height: size === 'small' ? '8px' : size === 'large' ? '12px' : '10px' }"
    ></span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  source: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    validator: (value: string) => ["online", "offline"].includes(value),
  },
  size: {
    type: String,
    default: "small",
    validator: (value: string) => ["small", "medium", "large"].includes(value),
  },
  borderColor: {
    type: String,
    default: "border-gray-300",
  },
  indicatorBorderWidth: {
    type: Number,
    default: 2,
  },
});
</script>
