<template>
  <div
    class="bg-white rounded-md shadow-lg h-full w-full border-2 flex flex-col items-center overflow-hidden"
  >
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: "basic-card",
};
</script>
