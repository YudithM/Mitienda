import React from "react";
import '../styles.css/footer.css';
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-icons/font/bootstrap-icons.css'

function Footer() {
    return (
        <footer>
            <><><div className="container_footer">
                <div className="box_footer">
                    <div className="logo">
                        <img className=""
                            src={require("../img/Ashly Store Perfil y Redes.png")}
                            alt="logo-f" />
                    </div>
                </div>
                <div className="box__footer">
                    <h2>ASHLY STORE</h2>
                    <a href="https://instagram.com/ashly.store.ar?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i>Instagram</a>
                </div>
                <div className="box__footer">
                    <h2>Contacto</h2>
                    <a href="/"><i className="bi bi-compass-fill"></i>Dirección: Rosario 541 - CABA <br />
                        República Argentina (C1424GBE)</a>
                    <a href="/"><i className="bi bi-telephone-fill"></i>(+54 11) 23629351
                    </a>
                </div>
            </div>
                 </><div className="box__copyright">
                <hr />
                <p><b>Copyright © 2021 - Todos los Derechos Reservados</b></p>
            </div></>
            </footer >
    );

}

export default Footer 


