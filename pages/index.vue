<template>
  <div>
    <HeaderPage />
    <div v-if="status === true">
      <div class="fondo-modal"></div>
      <IndexModal class="indexmodal"/>
    </div>
    <CarList class="lista-autos"/>
    <FooterPage class="footer"/>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data: () => ({
    autos: [],
    status: false
  }),
  async fetch() {
    this.autos = await fetch(
      'https://kia-api-caced-default-rtdb.firebaseio.com/cars.json'
    ).then((res) => res.json())
  },
  created() {
      this.$nuxt.$on('openModal', () => {
        this.status = true;
      })
      this.$nuxt.$on('closeModal', () => {
        this.status = false;
      })
  }
}
</script>

<style scoped>
.footer {
  margin-top: 180px;
  box-shadow: 2px 4px 50px 7px rgba(0,18,25,65%);
}
.lista-autos{
  margin-top: 80px;
}
.indexmodal{
  position: fixed;
  top: 10%;
  left: 33%;
}
.fondo-modal{
  background-color: rgb(5, 5, 5);
  position: absolute;
  top: 0%;
  opacity: 0.4;
  height: 1300px;
  width: 1343px;
}
</style>