import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
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
        <Route path="/detalle/:id" element={ <ItemDetailContainer /> } />
        <Route path="/equipo/:idEquipo" element={ <ItemListContainer /> } /> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
