<template>
    <div class="w-full flex flex-col p-2 box-border overflow-y-auto h-5/6" id="style-1">
        <WorkingSpace v-for="workingSpace in workingSpaceList" v-bind:key="workingSpace.ID" :WorkingSpace="workingSpace" />
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
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 1', 'Prueba', undefined , true));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 2', 'Prueba', undefined ));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 3', 'Prueba', undefined , true));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 4', 'Prueba', undefined ));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 5', 'Prueba', undefined , true));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 6', 'Prueba', undefined ));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 7', 'Prueba', undefined , true));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 8', 'Prueba', undefined ));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 9', 'Prueba', undefined , true));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 10', 'Prueba',undefined ));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 11', 'Prueba',undefined , true));
        this.workingSpaceList.push(new workingSpaceEntity(Math.random(), 'Environment 12', 'Prueba','iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==' ));
    },
}
</script>
<style>
#style-1::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: transparent;
}

#style-1::-webkit-scrollbar
{
	width: 12px;
	background-color: transparent;
}

#style-1::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>