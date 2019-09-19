import React from 'react';
import Signup from '../screens/Signup';
import "../screens/Login.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Login = () => (
    <div className="login-outter">
        <div className="login-container">
            <h1 className="title-login">Welcome User</h1>
            <form className="login" name="login" method="POST" action="/users/login">
                <div className="div-input">
                    <i className="fas fa-user"></i>
                    <input placeholder="Username" className="input input-user" type="text" name="username" required />
                </div>
                <div className="div-input">
                    <i className="fas fa-lock"></i>
                    <input placeholder="Password" className="input input-pass" type="password" name="password" required />
                </div>
                <div>
                    <button className="submit-button" type="submit">Login</button>
                </div>
            </form>
            <Link className="signup-link" to="/users/signup">Need to signup?</Link>
        </div>
    </div>
);

export default Login;