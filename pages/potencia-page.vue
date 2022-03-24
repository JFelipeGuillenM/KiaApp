<template>
  <div>
    <HeaderPage />
        <PotenciaComponent :carSelected="car"/>
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

<style>
.footer {
  margin-top: 180px;
  box-shadow: 2px 4px 50px 7px rgba(0,18,25,65%);
}
</style>