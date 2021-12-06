import React from 'react'
import './style.scss'

const SignIn = () => {
    return (
        <div className="e-sign-in-modal">
            <div className="e-sign-in-modal__content">
                <span className="e-sign-in-close">&times;</span>
                <p>Sign In Now</p>
            </div>
            <div className="e-sign-in-modal__content">
                <form>
                    <label htmlFor="username">Username</label> <input type="text" id="username"/>
                    <label htmlFor="password">Password</label> <input type="password" id="password"/>
                </form>
            </div>
            <button className="e-sign-in-btn">Login</button>
        </div>
    )
}

export default SignIn
