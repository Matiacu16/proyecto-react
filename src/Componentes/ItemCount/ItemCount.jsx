import React, { useState } from 'react';

function ItemCount( { initial, stock} ) {
    
    console.log(initial, stock);
    
    const [clicks, setClicks] = useState(1);
    
    const handleIncrement= () => {
        setClicks(clicks + 1);
    }
    
    const handleDecrement= () => {
        setClicks(clicks - 1);
    }
    
    return(
    <>
        <h3>Añadir al carrtio</h3>
        <button disabled={clicks <= 1} onClick={ handleDecrement }>-</button>
        <h3>Productos: {clicks}</h3>
        <button disabled={clicks >= 5} onClick={ handleIncrement }>+</button>
    </>
    )
}


export default ItemCount;