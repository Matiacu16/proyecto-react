import Button from "../Button/Button";
import "./Card.css";
import ItemCount from "../ItemCount/ItemCount";

function Card( {name, precio, imgurl, descripcion, stock, id} ) {

    
    return ( 
    <div className="main">
        <div className="card">
            <div className="card-img">
                <img src={imgurl} alt="imagen"></img>
                <div className="card-detail">
                    <h2>{name}</h2>
                    <p>{descripcion}</p>
                    <h3>U$D {precio}</h3>
                    <Button type="alert" text="Comprar"/>
                    <ItemCount />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;
