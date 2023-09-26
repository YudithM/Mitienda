/*const Product = require('../models/producto')
const User = require ('../models/usuarios.js')
const {validationResult} = require('express-validator');

const validarCampos = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errores : errors.array()})
    }
    next();
}

const emailExiste = async (email) =>{
    const user = await User.findOne({email});
    if(usuario){
        throw new Error('el correo electronico ya existe');
    }
}

const validateId = async (req,res,next)=>{
    const {id} = req.params

    const producto = await Product.findById(id)
    
    if(!producto){
        return res.status(400).json({
            msg: 'el id ingresado no es valido'
        })
    }
    next()
}

const productExiste = async (nombre)=>{
    const Producto = await productExiste.findOne({nombre});
    
    if(Producto){
        throw new Error('El producto ya exite');
    }
}



module.exports = {
    validarCampos,
    emailExiste,
    validateId, 
    productExiste
}*/