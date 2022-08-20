import Button from "../Button/Button";
import "./Card.css";

function Card(props) {
    console.log(props.data);
    
    return ( 
    <div className="main">
        <div className="card">
            <div className="card-img">
                <img src={props.data.imgurl} alt="imagen"></img>
                <div className="card-detail">
                    <h2>{props.data.name}</h2>
                    <p>{props.data.category}</p>
                    <h3>U$D {props.data.precio}</h3>
                    <Button type="alert" text="Comprar"/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;