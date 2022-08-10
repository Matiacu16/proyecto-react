import React from "react";
import Card from "../Card/Card";
import CardWithObject from "../Card/CardWithObject";
import Button from "../Button/Button";

function Visualizar() {
let userColor = "dark";
const styles = { marginTop: "20px", color: userColor };
let usuario = "tienda";

const dataProducts = [
    {
        id: 1,
        name: "Boston Celtics",
        precio: 122,
        imgurl: "https://picsum.photos/200/300",
        descripcion: "NBA jerseys",
        stock: 7,
        },
        {
            id: 2,
            name: "Golden State Warriors",
            imgurl: "https://picsum.photos/200/300",
            precio: 134,
            descripcion: "NBA jerseys",
            stock: 7,
        },
        {
            id: 3,
            name: "Lakers",
            imgurl: "https://picsum.photos/200/300",
            precio: 180,
            descripcion: "NBA jerseys",
            stock: 7,
        },
        {
            id: 4,
            name: "Miami Heat",
            imgurl: "https://picsum.photos/200/300",
            precio: 128,
            descripcion: "NBA jerseys",
            stock: 7,
        },
];



return (
    <>
    <div className="header-banner">
    </div>
    <h1 className="title">Tienda Spring</h1>
    <p style={styles}>{usuario}</p>
    <br />

    <Button type="info" text="Ver Más"/>


    </>
);
}

export default Visualizar;