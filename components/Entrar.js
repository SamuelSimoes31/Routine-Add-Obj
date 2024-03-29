import React from 'react';
import './Entrar.css';

// import {logarUsuario} from '../firebase/auth';

// import { Input, Tooltip, Icon } from 'antd'; import 'antd/dist/antd.css'
// const {search} = Input;

class Entrar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Login: '',
            Senha: ''
        };

        this.handleChangeLogin = this
            .handleChangeLogin
            .bind(this);
        this.handleChangeSenha = this
            .handleChangeSenha
            .bind(this);

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChangeLogin(event) {
        this.setState({Login: event.target.value});
    }
    handleChangeSenha(event) {
        this.setState({Senha: event.target.value});
    }

    handleSubmit(event) {
        
        // logarUsuario(this.state.Login, this.state.Senha, () => {
        //     this.props.history.push("/menu");
        // });

        event.preventDefault();
    }

    render() {
        return (
            <header className="App-header">
                <div className="Login-section">
                    <div className = "Div1">
                        Routine App
                    </div>
                    <form onSubmit={this.handleSubmit} className="formulario">
                        <label >
                            <input
                                className="Login"
                                placeholder="Login"
                                type="text"
                                value={this.state.Login}
                                onChange={this.handleChangeLogin}/>
                        </label>
                        <label >
                            <input
                                className="Senha"
                                placeholder="Senha"
                                type="password"
                                value={this.state.Senha}
                                onChange={this.handleChangeSenha}/>
                        </label>
                        <input className="submitbutton" type="submit" value="Login"/>
                        <button className="signinbutton">Registrar</button>
                    </form>
                </div>

            </header>
        );
    }
}

export default Entrar;