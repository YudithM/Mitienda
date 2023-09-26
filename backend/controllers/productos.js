const Product = require("../models/producto");
const {uploadImage} = require ('../database/cloudinary.js');
//const { default: Productos } = require("../../frontend/ashly/src/componentes/tarjetas");


const obtenerProductos = async (_,res)=>{
    try {
        const productos = await Product.find()
        res.status(200).send(productos)
          

    } catch (error) {
        res.status(400).send(error)
        
    }
}

const agregarProductos = async (req, res) => {
    const { nombre, image, precio, stock } = req.body
    const newProduct = new Product({
        nombre, image, precio, stock
    });
    console.log ()

    if (req.files?.image) {
        console.log('imagen subiendo')
        const result = await uploadImage(req.files.image.tempFilePath)
        newProduct.image = {
            public_id: result.public_id,
            secure_url: result.secure_url
        }
    }

    await newProduct.save()

    res.status(200).json({
        msg: 'Producto agregado con exito a la DB',
        newProduct,
    });
};

const actualizarProducto = async (req,res)=>{
    try {
        const {nombre, precio, stock} = req.body;
    
        const filter = { _id: req.params.id };
    
        const updateData = {nombre, precio, stock}
    
        let updatedProduct = await Product.findByIdAndUpdate(filter, updateData, {new: true})
    
        res.status(200).json({
          status: "success",
          data: updatedProduct,
        });
      } catch (error) {
        res.status(404).send(error);
      }
    };


const borrarProduto = async (req,res)=>{
        try {
            
            const{id}= req.params
            const productotoDelete = await Product.findByIdAndDelete({_id:id});
    
            res.status(200).send(productotoDelete);
    
        } catch (error) {
            res.status(404).send(error)
        }
};




module.exports = {
    obtenerProductos, 
    agregarProductos,
    actualizarProducto,
    borrarProduto
};