const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var homeSchema = new Schema({
  clientehome: {
    type: Schema.Types.ObjectId,
    ref: "Clientehome"},
  propietario : String,
  descripcion : String,
  precio : Number,
  contacto: String,

  zona : String,
  calle : String,
  
