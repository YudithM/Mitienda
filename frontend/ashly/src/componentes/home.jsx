import React from 'react';
import { Link } from 'react-router-dom';
//import {Map} from './mapa';
import '../styles.css/home.css';
import Carrousel from './carrusel';




//const mapURL=`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.GOOGLE_API_KEY.mapsKey}`;

function Home (){
    return(
         <div>
          <div>
          <Carrousel/>
          </div>
          <div className='contenedor-contacto'>
            <h1 className='contacto'>CONTACTO</h1>
            <p className='contacto'>TELEFONO: 1123629351</p>
            <p className='contacto'>DIRECCION: Rosario 541; CABA CP 1424</p>
               
          <Link className= 'contact-link' to='https://instagram.com/ashly.store.ar?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=='>INSTAGRAM</Link>


            </div>
                     
            </div> 
    )
}

export default Home


/*<div>
            <Map
            googleMapURL = {mapURL}
            containerElement= {<div style={{height:'400px'}}/>}
            mapElement= {<div style={{height: '100%'}}/>}
            loadingEment= {<p>cargando</p>}
            />
             </div> */
