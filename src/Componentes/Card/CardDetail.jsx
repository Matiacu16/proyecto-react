import "./Card.css";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";

function CardDetail({ id, equipo, precio, img, descripcion, stock }) {


    return ( 
        <div className="main">
            <div className="card">
                <div className="card-img">
                    <img src={img} alt="imagen"></img>
                    <div className="card-detail">
                        <h2>{equipo}</h2>
                        <p>{descripcion}</p>
                        <h3>U$D {precio}</h3>
                        <h6>stock: {stock}</h6>
                        <Button type="alert" text="Comprar"/>
                        <ItemCount />
                    </div>
                </div>
            </div>
        </div>
        );
}

export default CardDetail;
