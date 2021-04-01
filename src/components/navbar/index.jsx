import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';

import './navbar.css'

function Navbar() {
    const dispatch = useDispatch()
    return (
        <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand text-white">Eventos</Link>
            <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-black"></span>
                {/* Arrumar botão no mobile */}
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {

                        useSelector(state => state.usuarioLogado) > 0 ?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Meus Eventos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">Publicar Evento</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="novousuario">Cadastrar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="login">Login</Link>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
