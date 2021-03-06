import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../../components/navbar/';

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  const dispatch = useDispatch();


  function logar() {

    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      setMsgTipo('sucesso')
      dispatch({ type: 'LOG_IN', usuarioEmail: email })
    }).catch(erro => {
      setMsgTipo('erro')
    });

  }

  return (
    <>
    <Navbar />
      <div className="login-content d-flex">

        {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}

        <form className="form-signin mx-auto">
          <div className="text-center mb-4">
            <img src="https://www.flaticon.com/svg/vstatic/svg/759/759981.svg?token=exp=1617313951~hmac=b64eef7536190aff43fdd595385694fe" width="60px" alt="" />
            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
          </div>


          <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
          <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />


          <button onClick={logar} class="w-100 btn btn-lg btn-login" type="button">Logar</button>

          <div className="msg-login text-white text-center my-5">
            {/* Vou manter a mensagem para fins didaticos  */}
            {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você está conectado!; </span>}
            {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos!; </span>}
          </div>

          <div className="opcoes-login mt-5 text-center">
            <Link to="/usuariorecuperarsenha" className="mx-2">Recuperar Senha</Link>
            <span className="text-white"> | </span>
            <Link to='novousuario' className="mx-2">Quero Cadastrar</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;