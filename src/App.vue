<template>
  <div id="app">
    <app-header></app-header>
    <br>
    <div class="container">
      <chat></chat>
    </div>
  </div>
</template>

<script>
  import Chat from "./components/Chat";
  import Header from "./components/Header"

  export default {
    name: "app",
    components: {
      Chat,
      appHeader: Header,
    }
  };
</script>

<style>

</style>
