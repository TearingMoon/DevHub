<template>
  <div class="w-full h-max px-20 py-5">
    <div
      class="bg-white rounded-md shadow-lg h-full w-full border-2 flex flex-col items-center overflow-hidden"
    >
      <div class="h-14 w-full p-4 movingGradient">
        <h1
          class="h-6 text-lg items-center font-bold w-full truncate text-black"
        >
          Recently used Workspace
        </h1>
      </div>
      <div class="h-44 flex flex-row p-4 items-center w-full">
        <!-- Image Display position -->
        <div class="min-w-max h-full relative">
          <img
            class="object-cover rounded-lg h-36 w-36"
            src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg"
          />
          <div
            class="rounded-lg absolute top-0 left-0 w-full h-full bg-slate-400/50 duration-300 hover:opacity-100 opacity-0 flex justify-center items-center transition-opacity"
          >
            <button
              class="h-10 w-10 rounded-full movingGradient relative p-2 hover:scale-125 duration-300 ease-in-out"
            >
              <img src="../../assets/play.svg" />
            </button>
          </div>
        </div>
        <!-- Description position -->
        <div class="h-full pl-4 w-full overflow-hidden">
          <h1 class="h-10 text-3xl items-center font-bold w-full truncate">
            Title
          </h1>
          <p class="w-full overflow-hidden h-10 text-sm line-clamp-2">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </p>
          <div
            class="w-max p-1 flex flex-row gap-4 h-10 rounded-full bg-slate-200 shadow min-w-max ml-auto mt-5 mr-1"
          >
            <button
              class="h-8 w-8 rounded-full bg-slate-100 hover:bg-yellow-400 hover:shadow relative p-2 hover:scale-125 duration-300 ease-in-out"
            >
              <img src="../../assets/edit.svg" />
            </button>
            <button
              class="h-8 w-8 rounded-full bg-slate-100 hover:bg-red-400 hover:shadow relative p-2 hover:scale-125 duration-300 ease-in-out"
            >
              <img src="../../assets/delete.svg" />
            </button>
            <button
              class="h-8 w-8 rounded-full bg-slate-100 hover:bg-green-400 hover:shadow relative p-2 hover:scale-125 duration-300 ease-in-out"
            >
              <img src="../../assets/play.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "last-workspace",
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
