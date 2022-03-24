<template>
  <div class="container-principal">
      <div class="row">
          <div class="col-lg-6">
                <img class="imagen-auto" :src="carSelected.sprites.colored[0].url">
          </div>
          <div class="col-lg-6">
            <h3>Paquetes</h3>
            <div class="contenedor-cards">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div v-for="(data, index) in carSelected.paquetes" :key="index" class="col">
                        <div class="card">
                            <div class="form-check">
                                <label class="form-check-label" :for="`flexRadioDefault-${index}`">
                                    <div class="nombre-card">
                                        <h1 class="texto-nombre">{{data.nombre}}</h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{{data.nombre}}</h5>
                                        <ul>
                                            <li v-for="(descripcion,inndex) in data.descripcion" :key="inndex">{{descripcion}}</li>
                                        </ul>
                                        <input :id="`flexRadioDefault-${index}`" v-model="paqueteChecked" class="form-check-input" type="radio" name="flexRadioDefault" :value="index" @click="getPaquete(index)">
                                    </div>
                                </label>
                            </div>
                        </div>
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
    name: 'PaquetesComponent',
    props:{
        carSelected:{
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({
        paqueteChecked: 0,
    }),
    methods:{
        regresar(){
            this.$router.push('/potencia-page')
        },
        siguiente(){
            this.$router.push('/accesorios-page')
        },
        getPaquete(value){
            this.setPaquete(value)
        },
        ...mapMutations({
            setPaquete: 'selectedCar/setPaquete',
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
    margin-top: 40px;
    margin-left: 30px;
}
.form-check{
    padding:0;
}
.form-check-input{
    position: absolute;
    bottom: 2%;
    left: 12%;
}
.card-body{
    cursor: pointer;
}
.card:hover{
    box-shadow: 1px 3px 16px 1px rgba(0,0,0,42%);
    transition: 0.3s;
}
.nombre-card{
    background-color: rgb(143, 143, 143);
    height: 6em;
}
.texto-nombre{
    color: #ffff;
    text-align: center;
    font-weight: 400;
}
.imagen-auto{
    max-width: 450px;
}
.contenedor-cards{
    margin-top: 30px;
}
</style>