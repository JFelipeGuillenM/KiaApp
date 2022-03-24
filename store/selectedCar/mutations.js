export default {
    setCar(state, payload){
        state.car = payload
    },
    setAnio(state, payload){
        state.anio = payload
    },
    setMotor(state, payload){
        state.motor = payload
    },
    setTransmision(state, payload){
        state.transmision = payload
    },
    setPaquete(state, payload){
        state.paquete = payload
    },
    setKits(state, payload){
        state.kits.push(payload)
    },
    setColor(state, payload){
        state.color = payload
    }
}