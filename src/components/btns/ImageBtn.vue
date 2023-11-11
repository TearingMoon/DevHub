<template>
  <div class="min-w-max h-full relative">
    <img class="object-cover rounded-lg h-36 w-36" :src="src" />
    <div
      class="rounded-lg absolute top-0 left-0 w-full h-full bg-slate-400/50 duration-300 hover:opacity-100 opacity-0 flex justify-center items-center transition-opacity"
    >
      <button
        @click="$emit('click')"
        :class="'h-10 w-10 rounded-full relative p-2 hover:scale-125 duration-300 ease-in-out ' + customClass"
      >
        <slot> </slot>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default:
        "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  emits: ["click"],
};
</script>
<style lang=""></style>
