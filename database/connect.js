const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27020/casa", {
  useNewUrlParser: true
}).then(()=>{
  console.log('connexion a mongodb existosa');
}).catch(err => {
  console.log('error en la connexion', err);
});

module.exports = mongoose;
