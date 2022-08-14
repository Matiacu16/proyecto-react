import Button from "../Button/Button";
import "./Card.css";

function Card( {name, precio, imgurl, descripcion, stock} ) {

    
    return ( 
    <div className="main">
        <div className="card">
            <div className="card-img">
                <img src={imgurl} alt="imagen"></img>
                <div className="card-detail">
                    <h2>{name}</h2>
                    <p>{descripcion}</p>
                    <h3>U$D {precio}</h3>
                    <h6>Stock: {stock}</h6>
                    <Button type="alert" text="Comprar"/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;
