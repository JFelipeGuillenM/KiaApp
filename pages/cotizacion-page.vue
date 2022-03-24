<template>
  <div>
    <HeaderPage />
        <CotizacionComponent :carSelected="car" :anio="anio" :motor="motor" :transmision="transmision" :paquete="paquete" :kits="kits" :color="color"/>
    <FooterPage class="footer"/>
  </div>
</template>

<script>
export default {
    asyncData({store}){
        const car = store.state.selectedCar.car
        const anio = store.state.selectedCar.anio
        const motor = store.state.selectedCar.motor
        const transmision = store.state.selectedCar.transmision
        const paquete = store.state.selectedCar.paquete
        const kits = store.state.selectedCar.kits
        const color = store.state.selectedCar.color
        return{
            car,
            anio,
            motor,
            transmision,
            paquete,
            kits,
            color
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

<style>
.footer {
  margin-top: 180px;
  box-shadow: 2px 4px 50px 7px rgba(0,18,25,65%);
}
</style>