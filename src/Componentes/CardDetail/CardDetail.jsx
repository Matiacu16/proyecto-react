import Button from "../Button/Button";

function CardDetail( {name, precio, imgurl, descripcion, stock} ) {

    
    return ( 
    <div className="mai">
        <div className="">
            <div className="">
                <img src={imgurl} alt="imagen"></img>
                <div className="">
                    <h2>{name}</h2>
                    <p>{descripcion}</p>
                    <h3>U$D {precio}</h3>
                    <h6>Stock: {stock}</h6>
                    <Button type="alert" text="Comprar"/>
                    <hr/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CardDetail;
