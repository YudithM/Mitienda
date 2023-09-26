const User = require ('../models/usuarios.js')
const bcryptjs = require('bcryptjs');

const usuariosGet = async (req,res)=>{
    const usuario = await User.find();

    res.status(200).json({
        msg: 'Esta es la lista de usuarios',
        usuario
    })
}

const usuariosPut = async (req,res)=>{
    const {id} = req.params;
    const {_id,nombre,email, password} = req.body;

       if(password){
            const salt = bcryptjs.genSaltSync();    
            resto.password = bcryptjs.hashSync(password,salt)
        }

    const usuario = await User.findByIdAndUpdate(id,{$set:{nombre: nombre, email:email, password:password}});
     res.json({
        msg:'usuario actualizado con exito',
        usuario
     })
}


const usuariosPost = async (req,res)=>{
    const body = req.body;
    
    const newUser = new User(body);
    //const salt = bcryptjs.genSaltSync();
    //newUser.password = bcryptjs.hashSync(password,salt);
    //console.log()


    await newUser.save();

    res.status(200).json({
        msg:'usuario creado con exito',
        newUser
    });
};


const usuariosDelete = async (req,res) =>{
    const {id} = req.params;
    const usuario = await User.findByIdAndDelete(id)
    res.json({
        msg:'Usuario Eliminado'
    })
}

module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}