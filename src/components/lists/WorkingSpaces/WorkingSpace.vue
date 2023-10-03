<template>
    <div class="rounded flex flex-row m-1 p-2 
    items-center dark:text-slate-400
    dark:bg-neutral-700/10 hover:-translate-y-1
    dark:hover:bg-neutral-700/50 
    duration-300 
    dark:hover:text-white h-24 hover:shadow-lg">
        <!-- Tittle Section -->
        <div class="flex flex-row items-center text-inherit">
            <h1 class="mx-2 text-2xl text-inherit">{{ WorkingSpace.Name }}</h1>
            <span class="text-inherit">{{ WorkingSpace.ID }}</span>
        </div>
        <span> {{ WorkingSpace.Description }}</span>
        <div class="ml-auto flex gap-x-1.5">
            <StarIcon class="h-10 hover:text-amber-400 duration-300 cursor-pointer" v-if="WorkingSpace.IsFavourite"/>
            <StarIConOutline class="h-10 hover:text-amber-400 duration-300 cursor-pointer" v-if="!WorkingSpace.IsFavourite"/>
            <PencilSquareIcon class="h-10 hover:text-blue-400 duration-300 cursor-pointer"/>
            <TrashIcon class="h-10 hover:text-red-400 duration-300 cursor-pointer"/>
        </div>
    </div>
</template>
<script>
import workingSpaceEntity from '@/entities/workingSpaceEntity.js'
import { PencilSquareIcon, TrashIcon, StarIcon } from '@heroicons/vue/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/vue/24/outline';
export default {
    name: 'WorkingSpace',
    components: {PencilSquareIcon, TrashIcon, StarIcon, StarIConOutline: StarIconOutline},
    props: {
        WorkingSpace: {type: workingSpaceEntity},
    }
}
</script>