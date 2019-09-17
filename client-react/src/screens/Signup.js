import React from 'react';
import "./Signup.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Signup = () => (
    <div className="signup-container">
        <h1 className="signup-title">Signup</h1>
        <form className="signup" name="signup" method="POST" action="/users/signup">
            <div>
                <label for="name">First Name: </label>
                <input type="text" name="firstName" required />
            </div>
            <div>
                <label for="name">Last Name: </label>
                <input type="text" name="lastName" required />
            </div>
            <div>
                <label for="name">Email: </label>
                <input type="text" name="email" required />
            </div>
            <div>
                <label for="name">Username: </label>
                <input type="text" name="username" required />
            </div>
            <div>
                <label for="name">Password: </label>
                <input type="password" name="password" required />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            <Link className="login-link" to="/users/login">Already have an account?</Link>
        </form>
    </div>
)

export default Signup;