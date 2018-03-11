<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
</style>
