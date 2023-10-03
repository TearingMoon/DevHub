<template>
  <div class="home flex flex-col h-screen px-2">
    <WorkingSpaceList/>
    <NewWorkingSpaceBtn/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewWorkingSpaceBtn from '@/components/btns/NewWorkingSpaceBtn.vue'
import WorkingSpaceList from '@/components/lists/WorkingSpaces/WorkingSpaceList.vue'
export default {
  name: 'HomeView',
  components: {
    NewWorkingSpaceBtn,
    WorkingSpaceList
  }
}
</script>
