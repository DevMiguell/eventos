import { useState } from 'react'

import firebase from '../../config/firebase'
import 'firebase/auth'

import './usuario-novo.css'
import Navbar from '../../components/navbar'

const NovoUsuario = () => {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [msgTipo, setMsgTipo] = useState()
  const [msg, setMsg] = useState()
  const [carregando, setCarregando] = useState()

  function cadastrar() {
    setMsgTipo(null)
    if (!email || !email) {
      setMsgTipo('erro')
      setMsg('Voce precisa informar o email e senha para fazer um cadastro!')
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, senha).then(resutado => {
      setCarregando(0)
      setMsgTipo('sucesso')
    }).catch(erro => {
      setCarregando(0)
      setMsgTipo('erro')
      // Criando cada caso para a mensagem de erro
      switch (erro.message) {
        case 'Password should be at least 6 characters':
          setMsg('A senha deve ter pelo menos 6 caracteres!');
          break;
        case 'The email address is already in use by another account.':
          setMsg('Este email já está sendo utilizado por outro usuário!');
          break;
        case 'The email address is badly formatted.':
          setMsg('O formato do seu email é inválido!');
          break;
        default:
          setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
          break;
      }
    })
  }

  return (
    <>
    <Navbar />
      <div className="form-cadastro login-content d-flex">
        <form className="text-center form-signin form-login mx-auto">
        <img src="https://www.flaticon.com/svg/vstatic/svg/759/759981.svg?token=exp=1617313951~hmac=b64eef7536190aff43fdd595385694fe" width="60px" alt="" />
          <h1 className="h3 mb-4 text-white font-weight-bold">
            Cadastrar
                </h1>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
          <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />

          {
            carregando ? <div className="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
              : <button onClick={cadastrar} type="button" className="w-100 btn btn-lg btn-cadastro">Cadastrar</button>
          }
          <div className="msg-login text-white text-center my-2">
            {/* Se oque estiver dentro de msgTipo for sucesso &&(entao) mostre ... */}
            {msgTipo === 'sucesso' && <span><strong>WoW! </strong>Usuario cadastrado com sucesso! </span>}
            {msgTipo === 'erro' && <span><strong>Ops! </strong> {msg} </span>}
          </div>
        </form>
      </div>
    </>
  )
}

export default NovoUsuario
