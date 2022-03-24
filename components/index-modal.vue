<template>
  <div class="modal-container" >
    <div class="encabezado">
     <h5 class="titulo">Provincia</h5>
     <h5 class="btn-cerrar" @click="$nuxt.$emit('closeModal')">x</h5>
    </div>
    <div class="contenedor-mensaje">
      <p>Para ayudarte de mejor manera elige la provincia donde deseas realizar la compra.</p>
    </div>
    <div class="contenedor-select">
      <select class="form-select" aria-label="Default select example">
        <option selected>GUAYAS</option>
        <option value="1">ESMERALDAS</option>
        <option value="2">CAÑAR</option>
      </select>
    </div>
    <div class="contenedor-boton">
      <button type="button" class="btn btn-dark" @click="cambiarPagina()">Siguiente</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'IndexModal',
    methods:{
      cambiarPagina(){
        this.$router.push("/especificaciones-page")
      }
    }
}
</script>

<style scoped>
.modal-container{
  background: #ffff;
  width: 500px;
  height: 250px;
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
  top: 25%;
  left: 3%;
}
select{
  width: 330%;
  height: 40px;
}
.contenedor-boton{
  position: absolute;
  top: 80%;
  right: 4%;
}

</style>