import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h2>Ops, Parece que essa página não existe!!</h2>
            <br/>
            <span>Encontramos essas páginas aqui:</span><br/><br/>
            <Link id="link" to="/">Home</Link>
            <Link id="link" to="/sobre">Sobre</Link>
            <Link id="link" to="/contato">Contato</Link>
        </div>
    )
}

export default Erro;