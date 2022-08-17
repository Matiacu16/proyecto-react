import React, { useEffect, useState } from "react";
import detailData from "../../data/dataItem";
import CardDetail from "../CardDetail/CardDetail";
import { useParams } from 'react-router-dom';



function getProducts(){
    return new Promise((resolve) => {
        setTimeout(()=> resolve(detailData), 1000);
    });
};


export default function ItemListContainer() {
const [ data, setdata] = useState([]);

useEffect(
    () => {
        getProducts().then((respuesta) => {
            setdata(respuesta);
        });
    },
    []);

return (<div>
    <h1>Detalles Del Producto</h1>
    {
        data.map( (detailnba) =>   {
        return (
        <CardDetail
        id={detailnba.id}
        key={detailnba.id}
        imgurl={detailnba.imgurl} 
        name={detailnba.name} 
        descripcion={detailnba.descripcion} 
        precio={detailnba.precio}
        stock={detailnba.stock}
        />
    );
    })}
    
</div>
);
}


