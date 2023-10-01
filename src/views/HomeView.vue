<template>
  <div class="home">
    <div style="height: 100rem;">

    </div>
    <NewProjectBtn/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewProjectBtn from '@/components/btns/NewProjectBtn.vue'
export default {
  name: 'HomeView',
  components: {
    NewProjectBtn
  }
}
</script>
