<template>
    <div class="p-1">
        <button @click="$emit('click')" 
        class="rounded-md p-2 duration-300 bg-black" 
        :class="{ 'shadow-lg': shadow , 'ease-in-out duration-300 hover:scale-125':Animated}">
            {{ btnText }}
        </button>

    </div>
</template>
<script>
export default {
    emits: ['click'],
    props: {
        btnText: String,
        shadow: {
            type: Boolean,
            default: false,
        },
        Animated: {
            type: Boolean,
            default: false,
        }
    },
}
</script>