<template>
  <div class="container-principal">
      <div class="row">
          <div class="col-lg-6">
              <div class="select__año">
                <select :v-model="anioSelected" class="form-select" aria-label="Default select example">
                    <option v-for="(anio,index) in carSelected.anio" :key="index" :value="index" @click="getAnio(index)">{{anio}}</option>
                </select>
              </div>
                <img class="imagen-auto" :src="carSelected.sprites.colored[0].url">
          </div>
          <div class="col-lg-6">
              <h1>{{carSelected.nombre}}</h1>
              <div class="contenedor-detalles">
                <ul>
                    <li v-for="(descripcion,index) in carSelected.descripcion" :key="index">{{descripcion}}</li>
                </ul>
              </div>
              <div class="form-check">
                  <input id="flexCheckChecked" v-model="terminos" class="form-check-input" type="checkbox" checked>
                  <label class="form-check-label" for="flexCheckChecked">Términos y condiciones</label>
              </div>
              <div class="contenedor-botones">
                  <div class="row">
                      <div class="col-lg-6">
                        <a class="btn-regresar" href="/">Regresar</a>
                      </div>
                      <div class="col-lg-6">
                        <button type="button" class="btn btn-dark" @click="verificarCondiciones({terminos})">Continuar</button>
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
    name: 'EspecificacionesComponent',
    props:{
        carSelected:{
            type: Object,
            default: () => ({})
        }
    },
    data(){
        return{
            terminos: true,
            anioSelected: ''
        }
    },
    methods:{
        verificarCondiciones(){
            if( this.terminos === true){
                this.$router.push("/potencia-page")
            }else{
                this.$nuxt.$emit('openModal')
            }
        },
        regresar(){
             this.$router.push('/')
        },
        getAnio(value){
            this.setAnio(value)
        },
        ...mapMutations({
            setAnio: 'selectedCar/setAnio',
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
.contenedor-detalles{
    height: 80%;
}
.imagen-auto{
    max-width: 500px;
}
.btn-regresar{
    position: absolute;
    bottom: 1px;
    width: 40%;
    padding: 7px;
    background-color: rgb(163, 163, 163);
    color: rgb(255, 255, 255);
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
}
.btn-regresar:hover{
    background-color: rgb(66, 66, 66);
    color: #ffff;
}
.contenedor-botones{
    margin-top: 30px;
}
</style>