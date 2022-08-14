import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import Card from './Componentes/Card/Card';
import Button from './Componentes/Button/Button';
import ItemCount from './Componentes/ItemCount/ItemCount';
import ItemListContainer from './Componentes/Itemlist/ItemListContainer';
import ItemDetailContainer from'./Componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  
  return (
    <div className="App">
    <NavBar />
      <h1 className="title">Tienda Spring</h1> 
      <Button type="info" text="Ver Más"/>
    
    <ItemListContainer/> 
    
    {/* <ItemDetailContainer /> */}
    
    <ItemCount initial={1} stock={5}/>
    </div>
  );
}

export default App;
