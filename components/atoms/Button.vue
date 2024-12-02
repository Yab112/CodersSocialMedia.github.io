<template>
  <button
    :class="`${baseStyles} ${customClass}`"
    :type="type"
    @click="handleClick"
  >
    <div class="flex items-center gap-2">
      <Icon :icon="icon" class="text-blue-500 my-auto cursor-pointer" v-if="icon" />
      <span>{{ text }}</span>
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
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
