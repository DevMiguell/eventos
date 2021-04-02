// Usamos o (as) para podermos renomear uma importação
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../src/store/'

import Login from './view/Login'
import NovoUsuario from './view/Usuario-novo'
import Home from './view/Home'
import UsuarioRecuperarSenha from './view/Usuario-recuperar-senha'


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Route exact path='/login' component={Login} />
          <Route exact path='/novousuario' component={NovoUsuario} />
          <Route exact path='/' component={Home} />
          <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
        </Router>
      </Provider>
    </>
  );
}

export default App;
