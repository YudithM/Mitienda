import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



function EditarProducto(){
    const params= useParams()
    const [nombre,setNombre] = useState('');
    const [precio,setPrecio] = useState('');
    const [stock,setStock] = useState('');
    const navegar = useNavigate()
    useEffect(()=>{
        
       axios.put('http://localhost:8080/api/productos/actualizar/' + params.id).then(res=>{
                let dataProducto = res.data
            
            console.log('Data del producto',dataProducto.data.nombre)
            setNombre(dataProducto.data.nombre)
            setPrecio(dataProducto.data.precio)
            setStock(dataProducto.data.stock)
            })
    },[params.id])

    function editarProducto(){
        const productUpdate={
            nombre:nombre,
            precio:precio,
            stock:stock,

        }
        axios.put('http://localhost:8080/api/productos/actualizar/' + params.id,productUpdate).then(res=>{
            console.log(res.data)
            alert('Producto actualizado con éxito!')
            navegar("/")
        })
    }


    return(
        <div className="container">
            <div className="row">
            
                <h2 className="mt-4"> Editar {nombre}</h2>            

            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="precio">Precio</label>
                        <input type="text" className="form-control" value={precio} onChange={(e)=>setPrecio(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="stock">Stock</label>
                        <input type="text" className="form-control" value={stock} onChange={(e)=>setStock(e.target.value)}/>
                    </div>

                    <button onClick={editarProducto} className="btn btn-success"> Editar Producto</button>

                </div>
            </div>
        </div>
    )
}

export default EditarProducto;