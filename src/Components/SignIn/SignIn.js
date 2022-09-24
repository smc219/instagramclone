import React, { Component } from 'react';
import "../LoginPage/LoginPage.css";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="logipage__text" type="text" placeholder="Phone number, username, or email" />
                <input className="logipage__text" type="password" placeholder="Password" />
                <button className="login__button">Log In</button>
            </div>
        );
    }
}

export default SignIn;