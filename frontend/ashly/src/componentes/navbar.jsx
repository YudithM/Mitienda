
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Barra(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
      <NavbarBrand href="/">
      <img
        alt="logo"
        src={require("../img/Ashly Store Perfil y Redes.png")}
        style={{
          height: 70,
          width: 70
        }}
      />
    </NavbarBrand>
    <NavbarBrand href="/" className="me-auto">
          ASHLY STORE
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AgregarUsuario/">REGISTRATE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Productos/">PRODUCTOS</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Barra;


