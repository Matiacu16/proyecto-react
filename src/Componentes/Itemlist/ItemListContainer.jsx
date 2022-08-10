import React, { useEffect, useState } from "react";
import itemsData from "../../data/data.js";
import Card from "../Card/Card.jsx";


function getProducts(){
    return new Promise((resolve) => {
        setTimeout(()=> resolve(itemsData), 1000);
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
    {
        data.map( (productnba) =>   {
        return (
        <Card 
        key={productnba.id}
        imgurl={productnba.imgurl} 
        name={productnba.name} 
        descripcion={productnba.descripcion} 
        precio={productnba.precio}
        />
    );
    })}
    
</div>
);
}

