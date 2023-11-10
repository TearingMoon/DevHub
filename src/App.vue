<template>
  <div class="w-full bg-slate-100 min-h-screen h-full test">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<style>
.test {
  background-image: url("./assets/background.svg");
}
</style>
