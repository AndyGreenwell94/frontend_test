<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Andy animu</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item><router-link to="/index">Index</router-link></b-nav-item>
          <b-nav-item><router-link to="/list">List</router-link></b-nav-item>
          <b-nav-item>About</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
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
