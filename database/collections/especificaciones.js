const mongoose = require("../connect");
const Schema = mongoose.Schema;

var especificacionesSchema = Schema({

    home: {
        type: Schema.Types.ObjectId,
        ref: "Home"
    },

    categoria : String,
    precio: {
        type: Number
  
//Nombre, precio, descripción, fechaderegistro, fotografía del producto

const especificaciones = mongoose.model("Especificaciones", especificacionesSchema);
module.exports = especificaciones;
