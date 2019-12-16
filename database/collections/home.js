const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var homeSchema = new Schema({
  clientehome: {
    type: Schema.Types.ObjectId,
    ref: "Clientehome"},
  
  zona : String,
  calle : String,
  telefono : Number,
  lat : String,
  lon : String,
  Fecha_Registro: {
    type: Date, default: Date.now
  },
  fotolugar : Array
});
var home = mongoose.model("Home", homeSchema);
module.exports = home;
