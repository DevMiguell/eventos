import './login.css'

function Login() {
    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 fw-normal text-white font-weigth-bold">Login</h1>
                </div>

                <input type="email" className="form-control my-2" id="floatingInput" placeholder="Email" />

                <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" />

                <button className="w-100 btn btn-lg btn-login" type="submit">Sign in</button>

                <div className="msg-login text-white text-center my-4">
                    <span><strong>WoW! </strong> Você esta conectado</span>
                    <br/>
                    <span><strong>Ops! </strong> Verifique se a senha ou o usuario esta correto</span>
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
