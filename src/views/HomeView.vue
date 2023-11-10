<template>
  <div class="px-20 py-5 w-full h-full">
    <last-workspace></last-workspace>
  </div>
</template>

<script>
import LastWorkspace from '@/components/Home/LastWorkspace.vue';
export default {
  name: "HomeView",
  components: {
    LastWorkspace
  },
};
</script>
