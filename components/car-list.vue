<template>
  <div>
    <div class="lista-container">
      <div class="tipo__item">
        <img class="autos__img" src="../src/autos.png"/>
      </div>
      <div v-for="(data,index) in filtroAutos" :key="index" class="autos__item" @click="$nuxt.$emit('openModal'); getItemAuto(index)">
        <h4 class="nombreAuto">{{filtroAutos[index].nombre}}</h4>  
        <img class="autos__img" :src="filtroAutos[index].sprites.front_default.url"/>
      </div>
    </div>
    <div class="lista-container">
      <div class="tipo__item">
        <img class="autos__img" src="../src/eco.png"/>
      </div>
      <div v-for="(data,index) in filtroEco" :key="index" class="autos__item" @click="$nuxt.$emit('openModal'); getItemEco(index)">
        <h4 class="nombreAuto">{{filtroEco[index].nombre}}</h4>  
        <img class="autos__img" :src="filtroEco[index].sprites.front_default.url"/>
      </div>
    </div>
    <div class="lista-container">
      <div class="tipo__item">
        <img class="autos__img" src="../src/SUV&.png"/>
      </div>
      <div v-for="(data,indice) in filtroSuv" :key="indice" class="autos__item" @click="$nuxt.$emit('openModal'); getItemSuv(indice)">
        <h4 class="nombreAuto">{{filtroSuv[indice].nombre}}</h4>  
        <img class="autos__img" :src="filtroSuv[indice].sprites.front_default.url"/>
      </div>
    </div>
    <div class="lista-container">
      <div class="tipo__item">
        <img class="autos__img" src="../src/comercial.png"/>
      </div>
      <div v-for="(data,index) in filtroComercial" :key="index" class="autos__item" @click="$nuxt.$emit('openModal'); getItemComercial(index)">
        <h4 class="nombreAuto">{{filtroComercial[index].nombre}}</h4>  
        <img class="autos__img" :src="filtroComercial[index].sprites.front_default.url"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CarList',
  data: () => ({
    autos: [],
    auto:[],
    item: [],
    ecos: [],
    suv: [],
    comercial: []
  }),
  async fetch() {
    this.autos = await fetch(
      'https://kia-api-caced-default-rtdb.firebaseio.com/cars.json'
    ).then((res) => res.json())
  },
  computed: {
    filtroAutos(){
      return this.autos.filter(function (autos) {
        return autos.tipo === 'auto'
      })
    },
    filtroEco(){
      return this.autos.filter(function (autos) {
        return autos.tipo === 'eco'
      })
    },
    filtroSuv(){
      return this.autos.filter(function (autos) {
        return autos.tipo === 'suv'
      })
    },
    filtroComercial(){
      return this.autos.filter(function (autos) {
        return autos.tipo === 'comercial'
      })
    }
  },
  mounted(){
    this.ecos = this.autos.filter(eco => eco.tipo === "eco")
    this.auto = this.autos.filter(auto => auto.tipo === "auto")
    this.suv = this.autos.filter(suuv => suuv.tipo === "suv")
    this.comercial = this.autos.filter(comerc => comerc.tipo === "comercial")
  },
  methods:{
    getItemAuto(index){
      this.item = this.auto[index]
      this.setCar(this.item)
    },
    getItemEco(index){
      this.item = this.ecos[index]
      this.setCar(this.item)
    },
    getItemSuv(index){
      this.item = this.suv[index]
      this.setCar(this.item)
    },
    getItemComercial(index){
      this.item = this.comercial[index]
      this.setCar(this.item)
    },
    ...mapMutations({
      setCar: 'selectedCar/setCar'
    })
  }
}
</script>

<style scoped>
.lista-container {
  margin: auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.autos__img {
  width: 100%;
}
.autos__item{
    position: relative;
    cursor: pointer;
}
.nombreAuto{
    position: absolute;
    top: 5%;
    left: 25%;
    color: #ffff;
    cursor: pointer;
}
.tipo__item {
  background: #001219;
}
</style>