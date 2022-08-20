import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Card from "../Card/Card";
import itemsData from "../../data/data";
import { useParams } from "react-router-dom";


function traerProductos() {
return new Promise((resolve, reject) => {
    setTimeout(() => resolve(itemsData), 1500);
});
}

const ItemListContainer = () => {
const [data, setdata] = useState([]);

const idEquipo  = useParams().idEquipo;

useEffect(() => {
    traerProductos()
    .then((respuesta) => {

if (idEquipo === undefined) setdata(respuesta);
let filtrados = respuesta.filter( elemento => elemento.idEquipo === idEquipo)
        setdata(filtrados);
})
    .catch((error) => {
        console.log(error);
    });
}, []);


return (
    <div className="main">
    {data.map((productnba) => {
        return (
        <Card
            id={productnba.id}
            title={productnba.equipo}
            price={productnba.precio}
            category={productnba.descripcion}
            img={productnba.img}
            stock={productnba.stock}
        />
        );
    })}
    </div>
);
};

export default ItemListContainer;

