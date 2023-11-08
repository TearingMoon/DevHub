<template>
  <div class="home">
    <BasicBtn btn-text="Hello World" :shadow="true" :Animated="true"></BasicBtn>
  </div>
</template>

<script>
import BasicBtn from '@/components/btns/BasicBtn.vue';
export default {
  name: 'HomeView',
  components: {
    BasicBtn
  }
}
</script>
