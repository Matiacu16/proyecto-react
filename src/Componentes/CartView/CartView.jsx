import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import UserForm from "../UserForm/UserForm";
import CartItem from "./CartItem";
import "./cartview.css";

function CartView() {
const { cart, removeFromCart } = useContext(cartContext);

return (
    <>
    <div className="main container mx-auto mt-5">
        <h1>Carrito</h1>
        <table>
        <thead>
            <tr>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item) => {
            return (
                <CartItem
                key={item.id}
                titulo={item.titulo}
                precio={item.precio}
                total={item.precio * item.quantity}
                img={item.img}
                quantity={item.quantity}
                removeItem={() => removeFromCart(item.id)}
                />
            );
            })}
        </tbody>
        </table>
    </div>
    <div></div>
    <UserForm cart={cart} />
    </>
);
}

export default CartView;
