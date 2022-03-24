<template>
  <div class="container-principal">
    <div class="row">
      <div class="col-lg-6">
        <h3>{{carSelected.nombre}} {{carSelected.anio[anio]}}</h3>
        <p>{{carSelected.exterior[color].nombre}}</p>
        <div class="tabla-paquetes">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="table-secondary ">Paquetes</th>
                <th scope="col" class="table-secondary "> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{carSelected.paquetes[paquete].nombre}}</td>
                <td>$ {{carSelected.paquetes[paquete].precio}}</td>
              </tr>
              <tr>
                <td class="titulo-tabla">Total paquetes</td>
                <td>$ {{carSelected.paquetes[paquete].precio}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div  v-if="kits.length >= 1" class="tabla-kits">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="table-secondary ">Kits accesorios</th>
                <th scope="col" class="table-secondary "> </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in carSelected.accesorios.kit" :key="index">
                <td>{{data.nombre}}</td>
                <td>$ {{data.precio}}</td>
              </tr>
              <tr>
                <td class="titulo-tabla">Total kits</td>
                <td>$ {{sumakits}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tabla-total">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="table-secondary ">Total</th>
                <th scope="col" class="table-secondary "> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Precio base del vehículo</td>
                <td>$ {{carSelected.preciobase}}</td>
              </tr>
              <tr>
                <td>Motor {{carSelected.potencia.motor[motor].nombre}}</td>
                <td>$ {{carSelected.potencia.motor[motor].precio}}</td>
              </tr>
              <tr>
                <td>transmision {{carSelected.potencia.transmision[transmision].nombre}}</td>
                <td>$ {{carSelected.potencia.transmision[transmision].precio}}</td>
              </tr>
              <tr>
                <td class="table-dark titulo-tabla">Precio Total del Vehículo</td>
                <td class="table-dark titulo-tabla">$ {{total}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="contenedor-imagen">
         <img class="imagen-auto" :src="carSelected.sprites.colored[color].url">
        </div>
        <div class="contenedor-botones">
          <div class="row">
                <div class="col-lg-6">
                    <button type="button" class="btn btn-light" @click="regresar()">Regresar</button>
                </div>
                <div class="col-lg-6">
                    <button type="button" class="btn btn-dark snipcart-add-item"
                    :data-item-id="carSelected.id"
                    :data-item-url="$nuxt.$route.path"
                    :data-item-price="total"
                    :data-item-name="carSelected.nombre"
                    :data-item-image="carSelected.sprites.colored[color].url"
                    :data-item-description="carSelected.paquetes[paquete].nombre"
                    >Comprar en línea</button>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CotizacionComponent',
    props:{
        carSelected:{
            type: Object,
            default: () => ({})
        },
        anio:{
          type: Number,
          default : 0
        },
        motor: {
            type: null,
            default: null
        },
        transmision:{
          type: null,
          default: null
        },
        paquete:{
          type: null,
          default: null
        },
        kits:{
          type: null,
          default: null
        },
        color: {
          type: null,
          default: null
        }
    },
    data: () =>({
      sumakits: 0,
      total: 0
    }),
    mounted(){
      this.sumarkits();
      this.sumatotal();
    },
    methods:{
      sumarkits(){
        for (let i = 0; i < this.kits.length; i++) {
        this.sumakits += this.carSelected.accesorios.kit[i].precio;
        }
      },
      sumatotal(){
        this.total = this.carSelected.preciobase + this.carSelected.paquetes[this.paquete].precio + this.carSelected.potencia.motor[this.motor].precio + this.carSelected.potencia.transmision[this.transmision].precio + this.sumakits;
      },
      regresar(){
            this.$router.push('/exterior-page')
      }
    }
}
</script>

<style>
.imagen-auto{
  max-width: 500px;
}
.container-principal{
  width: 80%;
  margin: auto;
  margin-top: 60px;
}
.contenedor-imagen{
  height: 400px;
}
.contenedor-botones{
  margin-left: 20px;
}
.titulo-tabla{
  font-weight: bold;
}
.tabla-paquetes{
  width: 85%;
}
.tabla-kits{
  width: 85%;
}
.tabla-total{
  width: 85%;
}
</style>