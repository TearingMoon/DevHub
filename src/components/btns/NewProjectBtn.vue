<template>
    <button class="rounded flex m-2 duration-100 hover:shadow-xl bg-sky-500/50 hover:bg-sky-500 text-white/50 hover:text-white">
        <PlusIcon class="h-16 text-inherit"/>
    </button>
</template>
<script>
import { PlusIcon } from '@heroicons/vue/24/solid';
export default {
    name: 'NewProjectBtn',
    components: {PlusIcon}
}
</script>