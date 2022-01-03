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
           <CardRazasPerros nombreRaza='Beagle'  imagen={beagle} />
           <CardRazasPerros nombreRaza='Boder Collie'  imagen={collie} />
           <CardRazasPerros nombreRaza='Fresh Poodle'  imagen={poodle} />
           <CardRazasPerros nombreRaza='Golden Retriever'  imagen={golden} />
           <CardRazasPerros nombreRaza='Doberman'  imagen={doberman} />
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

function CardRazasPerros({nombreRaza, imagen}) {
  return (
    <li className='breedCard'>
      <div className = 'contenedorImagen'>
        <img src= {imagen} alt={nombreRaza}/>
      </div>
      <span className = 'breedTitle'>{nombreRaza}</span>
    </li>
  );
}
export default App;
