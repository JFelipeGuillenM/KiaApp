<template>
  <div class="contenedor-header">
      <img class="logo" src="../src/logo.png" alt="logo" @click="inicio()">
  </div>
</template>

<script>
export default {
    name: "HeaderPage",
    methods:{
        inicio(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.contenedor-header{
    background: #001219;
    height: 70px;
}
.logo{
    margin-top: 22px;
    margin-left: 200px;
    width: 6%;
    cursor: pointer;
}
</style>