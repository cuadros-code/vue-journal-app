<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h1>Hola Mundo</h1>
  <button @click="goToDaybook" class="btn btn-primary" >Primary</button>
  <button class="btn btn-secondary" >Secondary</button>
  <button class="btn btn-success" >Success</button>

</template>

<script>

export default {
  name: 'HomeView',
  components: {},
  methods:{
    goToDaybook() {
      this.$router.push({ name: 'daybook' })
    }
  }
}
</script>
