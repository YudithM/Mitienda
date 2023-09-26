import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../styles.css/registro.css'

function AgregarUsuario(){
    //Hooks
    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
      const navegar = useNavigate()
    function agregarUsuario(){
        const newUser = {
            nombre:nombre,
            email:email,
            password:password
        }
        axios.post('http://localhost:8080/api/usuarios', newUser)
        .then(res=> console.log(res.data))
        .then(err=>console.log(err))
        alert('Usuario Agregado a la DB')
        navegar(0)
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
      <label htmlFor='password'>Password</label>
      <input type='text' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    </div>
  </div>
  <p>Al Registrarte, aceptas nuestras Condiciones de uso y Política de privacidad</p>
  <button onClick={agregarUsuario} className='button'>Registrar</button>


 


  </div>
 )
}

  

export default AgregarUsuario

