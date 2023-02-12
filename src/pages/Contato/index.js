import { Link } from "react-router-dom";

function Contato() {
    return (
      <div>
        <h1>Pagina Contato</h1>
        <br/><br/>
        <Link id="link" to="/sobre">Pagina Sobre</Link>
        <br/><br/>
        <Link id="link" to="/">Pagina Home</Link>
      </div>
    );
  }
  
  export default Contato;