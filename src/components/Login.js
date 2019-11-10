import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../App.css';

class Login extends Component {
    render() {
        return (
            <div class="login-screen">
                <div class="login-container text-white">
                    <h1 class="login-header">GAINZ</h1>
                    <div class="login-subheader d-flex flex-row justify-between">
                        <p class="mr-2 border-bottom">Login</p>
                        <p>Sign Up</p>
                    </div>
                    <div class="login-form d-flex flex-column">
                        <input class="login-form-field mb-2" type="text" placeholder="Email"></input>
                        <input class="login-form-field" type="text" placeholder="Password"></input>
                        <Link to="/main">
                            <button type="submit" class="login-form-field login-form-submit">Submit</button>
                        </Link>
                    </div>
                    {/* Handle load speed */}
                </div>
            </div>
        );
    }
}

export default Login;