import { useState } from 'react'

import firebase from '../../config/firibase'
import 'firebase/auth'

import './login.css'

function Login() {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [msgTipo, setMsgTipo] = useState()

    function logar() {
        // pegamos o firebase e setamos dentro dele o usuario e senha e pagamos o resultado com o .then e imprimimos para o usuario
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resutado => {
            // Deu tudo correto 
            setMsgTipo('sucesso')
        }).catch(erro => {
            // Deu errado vai aparecer o erro
            setMsgTipo('erro')
        })
    }
    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 fw-normal text-white font-weigth-bold">Login</h1>
                </div>

                {/* Pegando evento/oque esta escrito com o (e) e setando no setEmail */}
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" id="floatingInput" placeholder="Email" />

                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" />

                <button onClick={logar} className="w-100 btn btn-lg btn-login" type="button">Logar</button>

                <div className="msg-login text-white text-center my-4">
                    {/* Se oque estiver dentro de msgTipo for sucesso &&(entao) mostre ... */}
                    {msgTipo === 'sucesso' && <span><strong>WoW! </strong> Você esta conectado</span>}
                    {msgTipo === 'erro' && <span><strong>Ops! </strong> Verifique se a senha ou o usuario esta correto</span>}
                </div>

                <div className="opcoes-login mt-4 text-center">
                    <a href="#" className="mx-2">Recuperar Senha</a>
                    <span className="text-white">|</span>
                    <a href="#" className="mx-2">Cadastrar</a>
                </div>
            </form>
        </div>
    )
}

export default Login
