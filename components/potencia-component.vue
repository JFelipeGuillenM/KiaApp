<template>
  <div class="container-principal">
      <div class="row">
          <div class="col-lg-6">
                <img class="imagen-auto" :src="carSelected.sprites.colored[0].url">
          </div>
          <div class="col-lg-6">
          <div class="contenedor-seccion">
            <h3>Motor</h3>
            <div class="contenedor-cards">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div v-for="(data, index) in carSelected.potencia.motor" :key="index" class="col">
                        <div class="card">
                            <div class="form-check">
                                <label class="form-check-label" :for="`flexRadioDefault-${index}`">
                                    <img :src="data.url" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">{{data.nombre}}</h5>
                                        <ul>
                                            <li v-for="(descripcion,inndex) in data.descripcion" :key="inndex">{{descripcion}}</li>
                                        </ul>
                                        <input :id="`flexRadioDefault-${index}`" v-model="motorChecked" class="form-check-input" type="radio" name="flexRadioDefault" :value="index" @click="getMotor(index)">
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
            <div class="contenedor-seccion">
            <h3>Transmisión</h3>
                <div class="contenedor-cards">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div v-for="(data, index) in carSelected.potencia.transmision" :key="index" class="col">
                            <div class="card">
                                <div class="form-check">
                                    <label class="form-check-label" :for="`flexRadioDefaultTransmision-${index}`">
                                        <img :src="data.url" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">{{data.nombre}}</h5>
                                            <ul>
                                                <li v-for="(descripcion,inndex) in data.descripcion" :key="inndex">{{descripcion}}</li>
                                            </ul>
                                            <input :id="`flexRadioDefaultTransmision-${index}`" v-model="transmisionChecked" class="form-check-input" type="radio" name="flexRadioDefaultTransmision" :value="index" @click="getTransmision(index)">
                                        </div>
                                    </label>
                                </div>
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
    name: 'PotenciaComponent',
    props:{
        carSelected:{
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({
        motorChecked: 0,
        transmisionChecked: 0,
    }),
    methods:{
        regresar(){
            this.$router.push('/especificaciones-page')
        },
        siguiente(){
            this.$router.push('/paquetes-page')
        },
        getTransmision(value){
            this.setTransmision(value)
        },
        getMotor(value){
            this.setMotor(value)
        },
        ...mapMutations({
            setTransmision: 'selectedCar/setTransmision',
            setMotor: 'selectedCar/setMotor'
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
    transition: 0.4s;
}
.imagen-auto{
    max-width: 500px;
}
</style>