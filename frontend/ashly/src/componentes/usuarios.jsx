/*import React from "react";
import { useEffect, useState } from "react";
//import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";


function Usuarios() {

    const [data, setData] = useState([]);
   
    useEffect(() => {
      obtenerProducto();
    }, [users]);

  obtenerUsuarios() {
    axios.get("http://localhost:8080/api/usuarios").then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  function borrarUsuario(idUsuario){
    axios.delete('http://localhost:8080/api/usuarios/eliminar/' + idUsuario).then(res=>{
      console.log(res.data)
      alert(' Usuario Eliminado')
      navegar(0)
    }).catch(err=>console.log(err))
}
    return (
      <div>
        <h1 className="title">LISTA DE USUARIOS</h1>
        <div className="user-list-container">
          {this.state.users.map((user) => (
            <div className="user-card" key={user.id}>
              <h2>{user.nombre}</h2>
              <p>{user.email}</p>
              <p>{user.password}</p>
            </div>
            <Link to={`/editarUsuario/${item._id}`}><li className="btn btn-success">Editar</li></Link>
            <button className="btn btn-danger" onClick={()=>{borrarUsuario(item._id)}}>Borrar</button>
          ))}
        </div>
      </div>
    );
  }

export default Usuarios;*/

