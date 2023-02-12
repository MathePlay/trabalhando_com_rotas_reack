import { Link } from "react-router-dom";

function Sobre() {
    return (
      <div>
        <h1>Pagina Sobre</h1>
        <br/><br/>
        <Link id="link" to="/">Pagina Home</Link>
        <br/><br/>
        <Link id="link" to="/Contato">Pagina Contato</Link>
      </div>
    );
  }
  
  export default Sobre;