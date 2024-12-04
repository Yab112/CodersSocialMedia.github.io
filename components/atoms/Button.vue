<template>
  <button
    :class="[
      baseStyles, 
      customClass,
      variantStyles[variant],
      sizeStyles[size], 
      { 'cursor-not-allowed opacity-50': disabled }
    ]"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="flex items-center justify-center gap-2 relative">
      <Icon :icon="icon" :class="[`text-${variant}-500 my-auto cursor-pointer`]" v-if="icon && !loading" />
      <span v-if="!loading">{{ text }}</span>
      <div v-if="loading" class="spinner absolute"></div>
    </div>
  </button>
</template>

<script>
import Icon from '~/components/atoms/Icons.vue';

export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "button",
    },
    customClass: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'blue',
      validator: (value) => ['blue', 'gray', 'green', 'red', 'yellow'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
  },
  data() {
    return {
      variantStyles: {
        blue: 'bg-slate-900 hover:bg-blue-600 text-white',
        gray: 'bg-gray-700 hover:bg-gray-600 text-white',
        green: 'bg-gray-700 hover:bg-gray-600 text-white',
        red: 'bg-gray-700 hover:bg-gray-600 text-white',
        yellow: 'bg-yellow-500 hover:bg-yellow-600 text-white'
      },
      sizeStyles: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
      }
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled && !this.loading) {
        this.$emit("click");
      }
    },
  },
};
</script>

<style scoped>
.spinner {
  width: 20px;
  height: 20px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
