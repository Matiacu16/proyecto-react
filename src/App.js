import './App.css';
import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card/Card';
import Button from './Componentes/Button/Button';
import ItemCount from './Componentes/ItemCount';

function App() {
  
  let userColor = "black"
  const styles = { marginTop: "20px", color: userColor};
  let usurario = "Spring"
  
  
  
  /*  const dataProduct = [ 
    {
        name: 'volkswagen gol highline',
        precio: 23400,
        imgurl: "https://picsum.photos/200/300",
        descripcion: "Producto En Venta"
    },
  ];  */
  
  
  return (
    <div className="App">
    <NavBar />
    <div className="header-home"></div>
    <div>
      <h1 ClassName="title">Tienda Spring</h1> 
      <p style={styles}>{usurario}</p>
      <br />
      <Button type="info" text="Ver Más"/>
    
    <Card 
    
    name="volkswagen gol highline"
    precio={23400}
    imgurl="https://picsum.photos/200/300"
    descripcion="Producto En Venta" />
    
    </div>
    
    <ItemCount initial={1} stock={3}/>
    
    </div>
  
  );
}

export default App;
