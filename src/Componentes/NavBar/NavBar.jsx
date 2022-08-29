import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
return (
<div className="nav-bar">
    <ul className="nav-menu">
        <Link to="/">Inicio</Link>
        <Link to="/detalle/:id">detalles</Link>
        <Link to="/contact">contact</Link>
    <img className="img-nav" src="https://cdn.icon-icons.com/icons2/1077/PNG/512/shoppingcart_77968.png"></img>
    </ul>
</div>
);
}

export default NavBar;
