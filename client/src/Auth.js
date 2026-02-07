import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Auth.css';

const Auth = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    return (
        <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">
            <div className="form-container sign-up-container">
                <Register />
            </div>

            <div className="form-container sign-in-container">
                <Login />
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Auth;