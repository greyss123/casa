var express = require('express');
const multer = require('multer');
var router = express.Router();
var fs = require('fs');
var _ = require("underscore");

var ClienteHome = require("../../../database/collections/../../database/collections/clientehome");


router.post("/clientehome",  (req, res) => {


  var data = req.body;
  data ["registerdate"] = new Date();
  var newclientehome = new ClienteHome(data);
  newclientehome.save().then((rr) =>{
    res.status(200).json({
      "resp": 200,
      "dato": newclientehome,
      "msn" :  "cliente  agregado con exito"
    });
  });
});
router.post("/cliente",  (req, res) => {


  var data = req.body;
  data ["registerdate"] = new Date();
  var newcliente = new Cliente(data);
  newcliente.save().then((rr) =>{
    res.status(200).json({
      "resp": 200,
      "dato": newcliente,
      "msn" :  "cliente  agregado con exito"
    });
  });
});

router.get("/clientehome",(req, res) => {
  var skip = 0;
  var limit = 10;
  if (req.query.skip != null) {
    skip = req.query.skip;
  }

  if (req.query.limit != null) {
    limit = req.query.limit;
  }
  ClienteHome.find({}).skip(skip).limit(limit).exec((err, docs) => {
    if (err) {
      res.status(500).json({
        "msn" : "Error en la db"
      });
      return;
    }
    res.json({
      result : docs
    });
  });
});

/*router.get("/cliente", (req, res, ) =>{
  Cliente.find({}).exec((error, docs) => {

    res.status(200).json({
      "msn" : "No existe el pedido "
    });
  });
});*/

router.get(/clientehome\/[a-z0-9]{1,}$/, (req, res) => {
  var url = req.url;
  var id = url.split("/")[2];
  ClienteHome.findOne({_id : id}).exec( (error, docs) => {
    if (docs != null) {
        res.status(200).json(docs);
        return;
    }

    res.status(200).json({
      "msn" : "No existe el pedido "
    });
  })
});

//elimina un cliente
router.delete(/clientehome\/[a-z0-9]{1,}$/, (req, res) => {
  var url = req.url;
  var id = url.split("/")[2];
  ClienteHome.find({_id : id}).remove().exec( (err, docs) => {
    res.json({
        message: "GREIS eliminadA "
        });
  });
});
//Actualizar solo x elementos
router.patch(/cliente\/[a-z0-9]{1,}$/, (req, res) => {
  var url = req.url;
  var id = url.split( "/")[4];
  var keys = Object.keys(req.body);
  var ClienteHome = {
    nombre : req.body.nombre,
    ci : req.body.ci,
    telefono : req.body.telefono,
    email : req.body.email,

  };
  console.log(clientehome);
  ClienteHome.findOneAndUpdate({_id: id}, clientehome, (err, params) => {
      if(err) {
        res.status(500).json({
          "msn": "Error no se pudo actualizar los datos"
        });
        return;
      }
      res.status(200).json({
        "resp": 200,
        "dato": clientehome,
        "msn" :  "clienE editado con exito"
      });
      return;
  });
});
//Actualiza los datos del cliente
router.put(/clientehome\/[a-z0-9]{1,}$/, (req, res) => {
  var url = req.url;
  var id = url.split("/")[2];
  var keys  = Object.keys(req.body);
  var oficialkeys = ['nombre', 'ci', 'telefono', 'email',];
  var result = _.difference(oficialkeys, keys);
  if (result.length > 0) {
    res.status(400).json({
      "msn" : "erorr no se puede actualizar intenten con patch"
    });fmulter
    return;
  }
  var clientehome = {
    nombre : req.body.nombre,
    ci : req.body.ci,
    telefono : req.body.telefono,
    email : req.body.email,

  };
  ClienteHome.findOneAndUpdate({_id: id}, clientehome, (err, params) => {
      if(err) {
        res.status(500).json({
          "msn": "Error no se pudo actualizar los datos"
        });
        return;
      }
      res.status(200).json({
        "resp": 200,
        "dato": clientehome,
        "msn" :  "cliente  editado con exito"
      });
      return;
  });
});

module.exports = router;
