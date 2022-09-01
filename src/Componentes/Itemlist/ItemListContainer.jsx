import React, { useState, useEffect } from "react";
import data from "../../data/data";
import Card from "../Card/Card";
import itemsData from "../../data/data";
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'

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

if (data.length === 0){
    return <div className="main">
<DotSpinner 
size={80}
speed={0.9} 
color="black" 
/>
    </div>
}


return (
    <div className="main">
    {data.map((item) => {
        return (
        <Card
            id={item.id}
            title={item.equipo}
            price={item.precio}
            category={item.descripcion}
            img={item.img}
            stock={item.stock}
        />
        );
    })}
    </div>
);
};

export default ItemListContainer;

