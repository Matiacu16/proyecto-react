import React from "react";
import Button from "../Button/Button";

function CartItem({ titulo, img, precio, descripcion, stock, removeItem }) {
return (
    <tr>
    <td>
        <img height={50} src={img} alt={titulo} />
    </td>
    <td>{titulo}</td>
    <td>$ {precio}</td>
    <td>{stock}</td>
    <td>
        <Button type="alert" onTouch={removeItem}>
        X
        </Button>
    </td>
    
    </tr>
);
}

export default CartItem;
