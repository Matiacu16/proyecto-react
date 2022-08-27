import React, { useState } from 'react';

function ItemCount(props) {

    const [count, setCount] = useState(props.initial);
    
    
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
        <button onClick={()=>props.onAdd(count)}>Finalizar Compra</button>
    </>
    )
}


export default ItemCount;