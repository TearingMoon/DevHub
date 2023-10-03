<template>
    <div class="p-2 fixed bottom-0 left-0 right-0">
        <button class="rounded flex duration-300 
        text-white items-center hover:-translate-y-1 p-2 w-full
        bg-sky-500
        hover:bg-sky-800
        justify-center ">
            <PlusIcon class="h-11 text-inherit" />
            <h2 class="h-full p-2 text-lg">
                {{ $t('WORKINGSPACE.ADD') }}
            </h2>
        </button>
    </div>
</template>
<script>
import { PlusIcon } from '@heroicons/vue/24/solid';
export default {
    name: 'NewWorkingSpaceBtn',
    components: { PlusIcon }
}
</script>