import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="login-screen">
                <div className="login-container text-white">
                    <h1 className="login-header">GAINZ</h1>
                    <div className="login-subheader d-flex flex-row justify-between">
                        <p className="mr-2 border-bottom">Login</p>
                        <p>Sign Up</p>
                    </div>
                    <div className="login-form d-flex flex-column">
                        <input className="login-form-field mb-2" type="text" placeholder="Email"></input>
                        <input className="login-form-field" type="text" placeholder="Password"></input>
                        <Link to="/main">
                            <button type="submit" className="login-form-field login-form-submit">Submit</button>
                        </Link>
                    </div>
                    {/* Handle load speed */}
                </div>
            </div>
        );
    }
}

export default Login;