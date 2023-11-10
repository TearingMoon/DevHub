<template>
  <div
    class="w-max p-1 flex flex-row gap-4 h-10 rounded-full bg-slate-200 shadow min-w-max ml-auto mt-5 mr-1"
  >
    <IconBtn color="yellow"> <img src="../../assets/edit.svg" /> </IconBtn>
    <IconBtn color="red"> <img src="../../assets/delete.svg" /> </IconBtn>
    <IconBtn color="green"> <img src="../../assets/play.svg" /> </IconBtn>
  </div>
</template>
<script>
import IconBtn from "@/components/btns/IconBtn.vue";
export default {
  name: "control-panel",
  components: {
    IconBtn,
  },
};
</script>
