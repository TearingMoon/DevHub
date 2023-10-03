<template>
    <div class="p-2 h-1/6 flex items-center">
        <button class="rounded flex duration-300
        text-white items-center hover:-translate-y-1 p-2 w-full
        bg-sky-500
        hover:bg-sky-800
        hover:shadow-lg
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