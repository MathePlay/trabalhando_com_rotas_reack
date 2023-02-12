import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>Pagina Home</h1> <br/> <br/>
        <Link id="link" to="/sobre">Pagina Sobre</Link> <br/> <br/>
        <Link id="link" to="/Contato">Pagina Contato</Link> <br/> <br/>

        <hr/>

        <Link id="link" to="/produto/12345">Acessar produto 12345</Link>
      </div>
    );
  }
  
  export default Home;