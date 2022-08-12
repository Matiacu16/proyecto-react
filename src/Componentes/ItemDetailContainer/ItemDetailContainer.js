import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetailContainer.js";
import dataItem from "../../dataItem/dataItem.js";

function getItem(){
    return new Promise((resolve) => {
        setTimeout(()=> resolve(dataItem), 1000);
    });
};



export default function ItemDetailContain() {
const [ data, setdata] = useState([]);

useEffect(
    () => {
        getItem().then((respuesta) => {
            setdata(respuesta);
        });
    },
    []);


return (<div>
        <h2>Detalles del Producto</h2>
        <h4>Boston Celtics</h4>
        <h6>precio: U$D 122</h6>
        <img src="https://picsum.photos/200/300" alt="imagen"></img>
        <p>Jersey de equipo NBA Boston Celtics año 2017 del Campeonato Copa Del Rey</p>
        <h6>stock: 7</h6>
        <hr/>

</div>
);
}

