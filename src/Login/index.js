import React from "react";
import Form from './components/Form';
import './index.scss';
import logo from '../logo_demo_app.png';

function Login (props){
    return(
        <div className="login-container">
            <header>
                <div className='logo-container'>
                    <img src={logo} alt='logo' style={{width: '16vw'}}/>
                    <h1>仕事</h1>
                </div>
            </header>
            <Form/>
        </div>
    )
}

export default Login;