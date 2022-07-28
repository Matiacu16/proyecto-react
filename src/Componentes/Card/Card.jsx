import "./Card.css";

function Card() {
    const dataProduct = {
        name: 'volkswagen gol highline',
        precio: 23400,
        descripcion: "Producto En Venta"
    };


    return ( 
    <div className="main">
        <div className="card">
            <div className="card-img">
                <div className="card-detail">
                    <h2>{dataProduct.name}</h2>
                    <p>{dataProduct.descripcion}</p>
                    <h3>$ {dataProduct.precio}</h3>
                    <button>Ver Mas</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;
