import { Link } from 'react-router-dom'

import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand text-white" href="#">Eventos</Link>
            <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-black"></span> 
                {/* Arrumar botão no mobile */}
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="novousuario">Cadastrar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
