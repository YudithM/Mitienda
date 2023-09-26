const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    nombre:{
        type: String,
        require: [true, ' El nombre es obligatorio']
     },
     image:{
      public_Id: String,
      secure_url: String
     },
     
     precio: {
        type:Number,
     },

     stock: {
        type: Number,
     },
   
});
const Product = model ('Product', ProductSchema);


module.exports = Product;

