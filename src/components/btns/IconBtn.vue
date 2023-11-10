<template>
  <button
    @click="$emit('click')"
    :class="
      'h-' +
      size +
      ' w-' +
      size +
      ' rounded-full bg-slate-100 hover:bg-' +
      color +
      '-400 hover:shadow relative p-2 hover:scale-125 duration-300 ease-in-out'
    "
  >
    <slot> </slot>
  </button>
</template>
<script>
export default {
  name: "icon-btn",
  props: {
    color: {
      type: String,
      default: "green",
    },
    size: {
      type: Number,
      default: 8,
    },
  },
  emits: ["click"],
};
</script>
