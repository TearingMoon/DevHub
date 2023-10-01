<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NewProjectBtn/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NewProjectBtn from '@/components/btns/NewProjectBtn.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NewProjectBtn
  }
}
</script>
