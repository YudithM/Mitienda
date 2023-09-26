
import React from 'react';
import Barra from './componentes/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './componentes/registro';
import Home from './componentes/home'
import Productos from './componentes/productos';
import EditarProducto from './componentes/editarproducto';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/footer';



function App() {
  return (
    <div className="App"> 
    <div>
    <Barra/>
    </div>

      <Router>
        <Routes>
          <Route path='/'element= {<Home/>}/>
          <Route path='/AgregarUsuario' element= {<Registro/>}/> 
          <Route path='/productos' element={<Productos/>}/>
          <Route path="/editarproducto/:id" element={<EditarProducto/>}></Route>
          </Routes>
      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;
