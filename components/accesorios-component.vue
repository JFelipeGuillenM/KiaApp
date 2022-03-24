<template>
  <div class="container-principal">
      <div class="row">
          <div class="col-lg-6">
                <img class="imagen-auto" :src="carSelected.sprites.colored[0].url">
          </div>
          <div class="col-lg-6">
            <h3 class="titulo">Kits</h3>
            <div class="contenedor-cards">
                <div class="row row-cols-1 row-cols-md-1 g-4 kit-item">
                    <div v-for="(data, index) in carSelected.accesorios.kit" :key="index" class="col">
                        <div class="card">
                            <div class="form-check">
                                <label class="form-check-label" :for="`flexCheckDefault-${index}`">
                                    <div class="card-body">
                                        <h5 class="card-title">{{data.nombre}}</h5>
                                        <p class="precio-kit">$ {{data.precio}}</p>
                                        <input :id="`flexCheckDefault-${index}`" v-model="kits" class="form-check-input" type="checkbox" :value="index" @click="getKits(index)">
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
    name: 'AccesoriosComponent',
    props:{
        carSelected:{
            type: Object,
            default: () => ({})
        }
    },
    data(){
        return{
            kits: [],
        }
    },
    methods:{
        regresar(){
            this.$router.push('/paquetes-page')
        },
        siguiente(){
            this.$router.push('/exterior-page')
        },
        getKits(value){
            this.setKits(value)
        },
        ...mapMutations({
            setKits: 'selectedCar/setKits',
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
.form-check{
    padding:0;
}
.form-check-input{
    position: absolute;
    bottom: 40%;
    right: 8%;
}
.card-body{
    cursor: pointer;
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
.imagen-auto{
    max-width: 500px;
}
</style>