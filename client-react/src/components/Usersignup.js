import React from 'react';
import "./Usersignup.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Usersignup = () => (
    <div className="usersignup-container">
        <form className="signup" name="signup" method="POST" action="/users/signup">
            <h1 className="signup-title">Create Account</h1>
            <div>
                <input placeholder="First Name" className="signup-input" type="text" name="firstName" required />
                <input placeholder="Last Name" className="signup-input" type="text" name="lastName" required />
            </div>
            <div>
                <input placeholder="Email" className="signup-input" type="text" name="email" required />
            </div>
            <div>
                <input placeholder="Username" className="signup-input" type="text" name="username" required />
            </div>
            <div>
                <input placeholder="Password" className="signup-input" type="password" name="password" required />
            </div>
            <div>
                <button className="signup-submit-button" type="submit">Submit</button>
            </div>
            <div className="login-link">
                <Link to="/users/login">Already have an account?</Link>
            </div>
        </form>
    </div>
)

export default Usersignup;