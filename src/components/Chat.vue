<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <ul>
          <li v-for="(message, idx) in messages" :key="idx">{{message}}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <input type="text" v-model="message">
      <button @click="getMessage">Send</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
      };
    },
    computed: {
      messages() {
        return this.$store.state.messages;
      }
    },
    methods: {
      getMessage() {
        this.$socket.sendObj({message: this.message});
        this.message = '';
      }
    }
  };
</script>

