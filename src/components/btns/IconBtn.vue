<template>
  <button
    @click="$emit('click')"
    :class="
      'h-8 w-8 rounded-full bg-slate-100 hover:shadow relative p-2 hover:scale-125 duration-300 ease-in-out ' + customClass 
    "
  >
    <slot> </slot>
  </button>
</template>
<script>
export default {
  name: "icon-btn",
  props: {
    customClass: {
      type: String,
      default: "hover:bg-green-400",
    }
  },
  emits: ["click"],
};
</script>
