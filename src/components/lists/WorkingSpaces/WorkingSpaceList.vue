<template>
    <div class="w-full flex flex-col" >
        <WorkingSpace v-for="workingSpace in workingSpaceList" v-bind:key="workingSpace.ID" :WorkingSpace="workingSpace"/>
    </div>
</template>
<script>
import WorkingSpace from '@/components/lists/WorkingSpaces/WorkingSpace.vue'
import WorkingSpaceEntity from '@/entities/workingSpaceEntity.ts'

export default {
    name: 'WorkingSpaceList',
    components: { WorkingSpace },
    data() {
        return {
            workingSpaceList: [],
        }
    },
    mounted() {
      this.workingSpaceList.push(new WorkingSpaceEntity('id', 'David', 'Prueba', 'Hola'))  
    },
}
</script>