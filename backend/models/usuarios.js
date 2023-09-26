const {Schema, model} = require('mongoose');

const UsuariosSchema = new Schema({
    nombre:{
        type: String,
        require: [true, ' El nombre es obligatorio']
     },
     email:{
      type: String,
      require: [true, ' El email es obligatorio'],
     },
     
     password: {
        type:Number,
        require: [true, ' El password es obligatorio']
     },

    

});
 const User = model ('User', UsuariosSchema);

module.exports = User;