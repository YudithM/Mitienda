/*import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



function EditarUsuario(){
    const params= useParams()
    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navegar = useNavigate()
    useEffect(()=>{
        
       axios.put('http://localhost:8080/api/usuarios/' + params.id).then(res=>{
                let dataUsuario = res.data
            
            console.log('Data de los usuarios',dataUsuario.data.nombre)
            setNombre(dataUsuario.data.nombre)
            setEmail(dataUsuario.data.email)
            setPassword(dataUsuario.data.password)
            })
    },[params.id])

    function editarUsuario(){
        const userUpdate={
            nombre:nombre,
            email:email,
            password:password,

        }
        axios.put('http://localhost:8080/api/usuarios/' + params.id, userUpdate).then(res=>{
            console.log(res.data)
            alert('Usuario actualizado con éxito!')
            navegar("/Usuarios")
        })
    }

 return (
  <div className='container-from'>
    <div className='formulario'>
      <h2 className='mt-4'>Registro</h2>
    </div>
  <div className='row'>
    <div className='col-sm-6 offset-3'>
    <div className='mb-3'>
      <label htmlFor='nombre'>Nombre</label>
      <input type='text' className='form-control' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
    </div>
    </div>
    <div className='col-sm-6 offset-3'>
    <div className='mb-3'>
      <label htmlFor='email'>Email</label>
      <input type='text' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    </div>
    <div className='col-sm-6 offset-3'>
    <div className='mb-3'>
      <label htmlFor='email'>Email</label>
      <input type='text' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    </div>
    </div>
  <p>Al Registrarte, aceptas nuestras Condiciones de uso y Política de privacidad</p>
  <button onClick={editarUsuario} className='button'>Editar</button>


 


  </div>
 )
}

  

export default EditarUsuario*/

