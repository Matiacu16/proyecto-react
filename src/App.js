import './App.css';
import NavBar from './Componentes/NavBar';
import Card from './Componentes/Card/Card';

function App() {
  
  let userColor = "black"
  const styles = { marginTop: "20px", color: userColor};
  let usurario = "Spring"

  return (
    <div className="App">
    <NavBar />
    <div className="header-home"></div>
    <div>
      <h1 ClassName="title">Tienda Spring</h1> 
      <p style={styles}>{usurario}</p>
      <br />
      <button onClick={() => alert("Click event callback")}>Mas Productos</button>
    <Card />
    </div>
    </div>
  
  );
}

export default App;
