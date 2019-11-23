const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var clientehomeSchema = new Schema({
  nombre : String,
  ci : String,
  telefono : Number,
  email : String,
  password : String,
  Fecha_Registro: {
      type: Date,
      default: Date.now()
  },
  tipo : String
});
var clientehome = mongoose.model("ClienteHome", clientehomeSchema);
module.exports = clientehome;
