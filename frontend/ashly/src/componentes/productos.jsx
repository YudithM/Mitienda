import React from "react";
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import '../styles.css/tarjeta.css'


function Productos() {

  const [data, setData] = useState([]);
  const navegar = useNavigate()
 
  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    const producto = (await axios.get("http://localhost:8080/api/productos")).data;
    console.log(producto);
    setData(producto);
  };

  function borrarProducto(idProducto){
    axios.delete('http://localhost:8080/api/productos/eliminar/' + idProducto).then(res=>{
      console.log(res.data)
      alert('Producto borrado')
      navegar(0)
    }).catch(err=>console.log(err))
}

  
  return (
    <div className="container">
      <h2> PRODUCTOS </h2>
      <div>
        {data.map((item) => {
          return (
            <div className="card" key={item._id+1}>
              <div className="row" key={item._id+2}>
                <div key={item._id} className="col-sm-6 offset-3">
                  <img src={item.image.secure_url} alt={item.nombre} width="200px" />
                  <p>Nombre: {item.nombre}</p>
                  <p>Precio: {item.precio}</p>
                  <p>stock: {item.stock}</p>
                <Link to={`/editarproducto/${item._id}`}><li className="btn btn-success">Editar</li></Link>
                <button className="btn btn-danger" onClick={()=>{borrarProducto(item._id)}}>Borrar</button>
                </div>
              </div>
            </div>
            
          );
        })}
      </div>
    
    </div>
  );
}

export default Productos;