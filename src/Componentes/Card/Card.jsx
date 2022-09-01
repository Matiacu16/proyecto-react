import Button from "../Button/Button";
import "./Card.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';


function Card( {titulo, precio, img, descripcion, stock, id} ) {

    
    return ( 
    <div className="main">
        <div className="card">
            <div className="card-img">
                <img src={img} alt="imagen"></img>
                <div className="card-detail">
                    <h2>{titulo}</h2>
                    <p>{descripcion}</p>
                    <h3>U$D {precio}</h3>
                    <Link to={`/detalle/${id}`}>Ver Mas</Link>
                    
                    <ItemCount />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;
