import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/Itemlist/ItemListContainer';
import ItemDetailContainer from'./Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm/UserForm";
import {CartProvider} from './store/cartContext';

function App() {
  
  
  return (
    <div className="App">
    <BrowserRouter>
    <CartProvider>
    
    <NavBar />
    <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/detalle/:id" element={ <ItemDetailContainer /> } />
        <Route path="/equipo/:idEquipo" element={ <ItemListContainer /> } />
        <Route path="/contact" element={<UserForm />} />
    </Routes>
    
    </CartProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
