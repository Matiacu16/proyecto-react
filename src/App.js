import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import Card from './Componentes/Card/Card';
import Button from './Componentes/Button/Button';
import ItemCount from './Componentes/ItemCount/ItemCount';
import ItemListContainer from './Componentes/Itemlist/ItemListContainer';
import ItemDetailContainer from'./Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/detalle" element={ <ItemDetailContainer /> } /> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
