import React, { useState } from 'react';

function ItemCount(props){
    
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
        <button onClick={ handleDecrement }>-</button>
        <h3>Click: {clicks}</h3>
        <button onClick={ handleIncrement }>+</button>
    </>
    )
}


export default ItemCount;