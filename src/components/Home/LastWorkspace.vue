<template>
  <basic-card>
    <div class="h-14 w-full p-4 movingGradient">
      <h1 class="h-6 text-lg items-center font-bold w-full truncate text-black">
        Recently used Workspace
      </h1>
    </div>
    <div class="h-44 flex flex-row p-4 items-center w-full">
      <!-- Image Display position -->
      <ImageBtn customClass="movingGradient">
        <img src="../../assets/play.svg" />
      </ImageBtn>

      <!-- Description position -->
      <div class="h-full pl-4 w-full overflow-hidden">
        <h1 class="h-10 text-3xl items-center font-bold w-full truncate">
          Title
        </h1>
        <p class="w-full overflow-hidden h-10 text-sm line-clamp-2">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
        <ControlPanel></ControlPanel>
      </div>
    </div>
  </basic-card>
</template>

<script>
import ControlPanel from "@/components/btns/ControlPanel.vue";
import ImageBtn from "@/components/btns/ImageBtn.vue";
import BasicCard from "@/components/cards/BasicCard.vue";
export default {
  name: "last-workspace",
  components: {
    ControlPanel,
    ImageBtn,
    BasicCard,
  },
};
</script>

<style>
.movingGradient {
  background: linear-gradient(91deg, #f0aff3, #f3eea4, #74d9ea, #f5cece);
  background-size: 800% 800%;

  -webkit-animation: AnimationName 34s ease infinite;
  -moz-animation: AnimationName 34s ease infinite;
  -o-animation: AnimationName 34s ease infinite;
  animation: AnimationName 34s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
@-o-keyframes AnimationName {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}
</style>
