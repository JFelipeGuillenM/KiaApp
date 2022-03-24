<template>
  <div class="modal-container" >
    <div class="encabezado">
     <h5 class="titulo">Terminos y condiciones</h5>
     <h5 class="btn-cerrar" @click="$nuxt.$emit('closeModal')">x</h5>
    </div>
    <div class="contenedor-mensaje">
      <p>Se reserva el derecho de hacer cambios en cualquier momento sin previo aviso u obligación a la información contenida en este sitio de web, precios, programas de incentivos, especificaciones técnicas, equipamiento, ilustraciones y de modificar o suspender modelos y otros. Las imágenes y videos pueden no corresponder con el producto final. Algunas características del vehículo de la imagen no aplican a los modelos ensamblados o comercializados en Ecuador. Paquete de accesorios es ofrecido por cada concesionario por lo que valor, especificación y Disponibilidad pueden variar. Precios incluyen IVA</p>
    </div>
    <div class="row contenedor-radios">
      <div class="col-lg-6">
        <input  id="flexRadioDefault1"  v-model="terminos" value="acepto" class="form-check-input" type="radio" name="flexRadioDefault">
        <label class="form-check-label" for="flexRadioDefault1">Acepto</label>
      </div>
      <div class="col-lg-6">
        <input id="flexRadioDefault1" class="form-check-input" type="radio" name="flexRadioDefault" >
        <label class="form-check-label" for="flexRadioDefault1">Rechazo</label>
      </div>
    </div>
    <div class="contenedor-boton">
      <button type="button" class="btn btn-dark" @click="siguientePagina()">Continuar</button>
    </div>
  </div>
</template>

<script>
export default {   
    name: 'EspecificacionesModal',
    data: () =>({
      terminos: "acepto"
    }),
    methods:{
      siguientePagina(){
        if(this.terminos === "acepto"){
          this.$router.push("/potencia-page")
        }
      }
    }
}
</script>

<style scoped>
.modal-container{
  background: #ffff;
  width: 550px;
  height: 370px;
  position: relative;
  border: 6px none #1C6EA4;
  border-radius: 7px;
}
.titulo{
  position: absolute;
  top: 6%;
  left: 4%;
}
.btn-cerrar{
  position: absolute;
  top: 4%;
  right: 4%;
  cursor: pointer;
}
.contenedor-select{
  position: absolute;
  top: 55%;
  left: 2%;
}
.contenedor-mensaje{
  position: absolute;
  top: 20%;
  left: 4%;
  width: 90%;
  text-align: justify;
}
select{
  width: 330%;
  height: 40px;
}
.contenedor-boton{
  position: absolute;
  top: 85%;
  right: 4%;
}
.contenedor-radios{
    position: absolute;
    top: 87%;
    left: 30%;
}
</style>