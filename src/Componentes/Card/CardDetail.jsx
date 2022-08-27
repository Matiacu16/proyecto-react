import "./Card.css";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import { link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";

function CardDetail({ id, equipo, precio, img, descripcion, stock }) {
    
    const { addToCart } = useContext(cartContext)
    
    const quantityInCart = 0;
    
    function handleAdd(quantity) {
    const itemToCart = {id, equipo, precio, img, descripcion, stock};
    
    addToCart(itemToCart, quantity);
    }
    
    return ( 
        
            <div className="card">
                <div className="card-img">
                    <img src={img} alt="imagen"></img>
                    </div>
                    <div className="card-detail">
                        <h2>{equipo}</h2>
                        <p>{descripcion}</p>
                        <h3>U$D {precio}</h3>
                        <h6>stock: {stock}</h6>
                        <Button type="alert" text="Comprar"/>
                        </div>
                        
                        {quantityInCart === 0 ? (
                            <ItemCount
                            initial={1}
                            stock={stock}
                            onAdd={handleAdd}
                            text={"Finalizar"}
                            />
                        ) : (
                        <a href="/cart">Ir al carrito</a>
                        )}
                    </div>
        
        );
}

export default CardDetail;
