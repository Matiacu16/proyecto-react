import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {

    let activeStyle = {
        textDecoration: "underlineno",
    };


return (
<div className="nav-bar">
    <ul className="nav-menu">
        <NavLink style={({ isActive }) => (isActive ? { color: "red"} : undefined)} to="/">Inicio</NavLink>
        <NavLink style={({ isActive }) => (isActive ? { color: "red"} : undefined)} to="/detalle">detalles</NavLink>
        <NavLink style={({ isActive }) => (isActive ? { color: "red"} : undefined)} to="/info">Info</NavLink>
    <img className="img-nav" src="https://cdn.icon-icons.com/icons2/1077/PNG/512/shoppingcart_77968.png"></img>
    </ul>
</div>
);
}

export default NavBar;

    /*const menu = [{   url: "/home", title: "inicio", url: "/detalle", title: "detalle", url: "/home", title: "info" }]
    {menu.map( enlace => <link to={enlace.url}>{enlace.title}</link>)}*/