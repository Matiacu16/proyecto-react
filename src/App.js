import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/Itemlist/ItemListContainer';
import ItemDetailContainer from'./Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./Componentes/UserForm/UserForm";
import {CartProvider} from './store/cartContext';
import CartView from './Componentes/CartView/CartView';
import app from './services/firebase';

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
        <Route path="/cart" element={<CartView />} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
