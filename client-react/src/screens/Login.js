import React from 'react';
import Signup from '../screens/Signup';
import "../screens/Login.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Login = () => (
    <div className="login-container">
        <h1 className="title-login">Login</h1>
        <form className="login" name="login" method="POST" action="/users/login">
            <div>
                <label className="label label-user" for="name"></label>
                <br />
                <input placeholder="Username" className="input input-user" type="text" name="username" required />
            </div>
            <div>
                <label className="label label-pass" for="name"></label>
                <br />
                <input placeholder="Password" className="input input-pass" type="password" name="password" required />
            </div>
            <div>
                <button className="submit-button" type="submit">Submit</button>
            </div>
        </form>
        <Link className="signup-link" to="/users/signup">Need to signup?</Link>
    </div>
);

export default Login;