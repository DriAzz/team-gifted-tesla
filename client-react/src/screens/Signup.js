import React from 'react';
import "./Signup.css";
import Usersignup from '../components/Usersignup';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Signup = () => (
    <div className="signup-container">
        <Usersignup />
    </div>
)

export default Signup;