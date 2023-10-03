<template>
    <div class="w-full flex flex-col" >
        <WorkingSpace v-for="workingSpace in workingSpaceList" v-bind:key="workingSpace.ID" :WorkingSpace="workingSpace"/>
    </div>
</template>
<script>
import WorkingSpace from '@/components/lists/WorkingSpaces/WorkingSpace.vue'
import workingSpaceEntity from '@/entities/workingSpaceEntity.js'

export default {
    name: 'WorkingSpaceList',
    components: { WorkingSpace },
    data() {
        return {
            workingSpaceList: [],
        }
    },
    mounted() {
      this.workingSpaceList.push(new workingSpaceEntity('id', 'David', 'Prueba', 'Hola'))
    },
}
</script>