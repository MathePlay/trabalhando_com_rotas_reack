import { Link } from "react-router-dom";
import "./style.css"

function Header(){
    return(
        <header>
            <h2>Sujeito Dev</h2>

            <div className="menu">
                <Link id="link" to="/">Home</Link>
                <Link id="link" to="/sobre">Sobre</Link>
                <Link id="link" to="/contato">Contato</Link>
            </div>
        </header>
    )
}

export default Header;