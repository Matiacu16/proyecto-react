import React, { useEffect, useState } from "react";
import dataJSON from "../../data/data";
import CardDetail from "../Card/CardDetail";
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'

function ItemDetailContainer({ itemid }) {
const [item, setItem] = useState({});

const { id } = useParams();

function traerProducto() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        let itemRequested = dataJSON.find(
        (elemento) => elemento.id === Number(id)
        );

        if (itemRequested === undefined) reject("No se encuentra el producto");
        else resolve(itemRequested);
    }, 1000);
    });
}

useEffect(() => {
    traerProducto()
    .then((respuesta) => setItem(respuesta))
    .catch((error) => alert(error));
}, []);



return (
    <div className="main">
    <CardDetail
        id={item.id}
        title={item.name}
        price={item.precio}
        img={item.img}
        category={item.descripcion}
        stock={item.stock}
    />
    </div>
);
}

export default ItemDetailContainer;


