<template>
  <div>
    <HeaderPage />
    <especificacionesComponent :carSelected="car" />
    <div v-if="status === true">
      <div class="fondo-modal"></div>
      <EspecificacionesModal class="especificModal"/>
    </div>
    <FooterPage class="footer"/>
  </div>
</template>

<script>

export default {
    asyncData({store}){
        const car = store.state.selectedCar.car
        return{
            car,
        }
    },
    data:() => ({
      status: false
    }),
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

.especificModal{
  position: fixed;
  top: 20%;
  left: 33%;
}
.fondo-modal{
  background-color: rgb(5, 5, 5);
  position: absolute;
  top: 0%;
  opacity: 0.4;
  height: 620px;
  width: 1343px;
}
</style>