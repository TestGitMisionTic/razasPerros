import './styles/App.css';
import collie from './media/BorderCollie.jpg';
import beagle from './media/Beagle.jpg';
import doberman from './media/doberman.jpg';
import golden from './media/golden-retriever.jpg';
import poodle from './media/freshpoodle.jpg';
import logo from './media/loggo.png';


function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
          <li>
            <img src={logo} className="logo" alt="imagen" /> 
          </li>
          <li>
            <button className="botonGenerico mainButton">Nuevo post</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar raza" />
              <i className="fas fa-search botonGenerico iconoBusqueda"></i>
            </div>
          </li>
          <li>
            <button className="botonGenerico secondaryButton">Login</button>
          </li>
          <li>
            <button className="botonGenerico mainButton">Registro</button>
          </li>

        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardContainer">
            <li className="breedCard"> 
              <div className="contenedorImagen">
                <img src={collie} alt="Border Collie"/>
              </div>
              <span className="breedTitle">Border Collie</span>
            </li>
            <li className="breedCard"> 
              <div className="contenedorImagen">
                <img src={beagle} alt="Beagle"/>
              </div>
              <span className="breedTitle">Beagle</span>
            </li>
            <li className="breedCard"> 
              <div className="contenedorImagen">
              <img src={golden} alt="Golden Retriever"/>
              </div>
              <span className="breedTitle">Golden Retriever</span>
            </li>
            <li className="breedCard"> 
              <div className="contenedorImagen">
              <img src={doberman} alt="Doberman"/>
              </div>
              <span className="breedTitle">Doberman</span>
            </li>
            <li className="breedCard"> 
              <div className="contenedorImagen">
              <img src={poodle} alt="Fresh Poodle"/>
              </div>
              <span className="breedTitle">Fresh Poodle</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
