<template>
  <div class="container-principal">
      <div class="row">
          <div class="col-lg-6">
                <img class="imagen-auto" :src="carSelected.sprites.colored[indice].url">
          </div>
          <div class="col-lg-6">
          <h3 class="titulo">Color</h3>
          <p>{{carSelected.sprites.colored[indice].nombre}}</p>
          <div class="row contenedor-colores">
              <div v-for="(data, index) in carSelected.exterior" :key="index" class="col-lg-4">
                  <div class="contenedor-color" @click="cambiarColor(index)">
                    <img :src="data.url" alt="color" class="colores">
                  </div>
              </div>  
          </div>
          <div class="contenedor-botones">
            <div class="row">
                <div class="col-lg-6">
                    <button type="button" class="btn btn-light" @click="regresar()">Regresar</button>
                </div>
                <div class="col-lg-6">
                    <button type="button" class="btn btn-dark" @click="siguiente()">Continuar</button>
                </div>
            </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'ExteriorComponent',
    props:{
        carSelected:{
            type: Object,
            default: () => ({})
        }
    },
    data:() => ({
        indice: 0
    }),
    methods:{
        regresar(){
            this.$router.push('/accesorios-page')
        },
        siguiente(){
            this.$router.push('/cotizacion-page')
        },
        cambiarColor(index){
            this.indice = index
            this.setColor(index)
        },
        ...mapMutations({
            setColor: 'selectedCar/setColor',
        })
    }
}
</script>

<style scoped>
.container-principal{
    width: 80%;
    margin: auto;
    margin-top: 40px;
}
.contenedor-seccion{
    margin-bottom: 30px;
}
.contenedor-botones{
    margin-left: 30px;
    margin-top: 40px;
}
.card{
    margin-bottom: 20px;
}
.card:hover{
    box-shadow: 1px 3px 16px 1px rgba(0,0,0,42%);
    transition: 0.4s;
}
.titulo{
    margin-bottom: 25px;
}
.colores{
    padding: 4%;
    margin-left: 1.5px;
}
.contenedor-color{
    border: 1px solid rgb(32, 32, 32);
    border-radius: 5px;
    width: 56%;
    cursor: pointer;
    margin-top: 10px;
}
.contenedor-color:hover{
    box-shadow: 1px 3px 16px 1px rgba(0,0,0,42%);
    transition: 0.4s;
}
.imagen-auto{
    max-width: 500px;
}
</style>