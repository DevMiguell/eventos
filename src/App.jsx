// Usamos o (as) para podermos renomear uma importação
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../src/store/'

import Login from './view/Login'
import NovoUsuario from './view/Usuario-novo'
import Home from './view/Home'
import UsuarioRecuperarSenha from './view/Usuario-recuperar-senha'
import EventoCadastro from './view/evento-cadastro'
import EventoDetalhes from './view/evento-detalhes'


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Route exact path='/login' component={Login} />
          <Route exact path='/novousuario' component={NovoUsuario} />
          <Route exact path='/' component={Home} />
          <Route path='/eventos/:parametro' component={Home} />
          <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
          <Route exact path='/eventocadastro' component={EventoCadastro} />
          <Route path='/eventodetalhes/:id' component={EventoDetalhes} />
        </Router>
      </Provider>
    </>
  );
}

export default App;
