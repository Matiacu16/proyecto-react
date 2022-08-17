import React, { useState } from 'react';

function ItemCount( { initial, stock} ) {
    
    console.log(initial, stock);
    
    const [count, setCount] = useState(1);
    
    const handleIncrement= () => {
        setCount(count + 1);
    }
    
    const handleDecrement= () => {
        setCount(count - 1);
    }
    
    return(
    <>
        <h3>Añadir al carrtio</h3>
        <button className="btn btn-success" disabled={count <= 1} onClick={ handleDecrement }>-</button>
        <h4>Productos: {count}</h4>
        <button className="btn btn-success" disabled={count >= 5} onClick={ handleIncrement }>+</button>
    </>
    )
}


export default ItemCount;