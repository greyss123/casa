const mongoose = require("../connect");//pedidos
//var ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

var caracteristicasSchema = new Schema({

  //Idmenus : {type: Schema.ObjectId, ref: "menus"},
  //Idrestaurant: {type: Schema.ObjectId, ref: "restaurant"},
  //Idcliente : {type: Schema.ObjectId, ref: "cliente"},
  clientehome: {
  type: Schema.Types.ObjectId,
  ref: "Cliente"
  },

  home:{
    type: Schema.Types.ObjectId,
    ref: "Home"
  },
  especificaciones : {
    type: Schema.Types.ObjectId,
    ref: "Especificaciones"
  },
  precios : Number,
  //aumenytar ateibutos
  Fecha_Registro:
    {
      type:Date,
      default: Date.now()

    },

pago_total : Number,
});
var caracteristicas = mongoose.model("Caracteristicas", caracteristicasSchema);
module.exports = caracteristicas;
