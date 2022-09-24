import React, { Component } from 'react';
import "../LoginPage/LoginPage.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="logipage__text" type="text" placeholder="Mobile Number or Email" />
                <input className="logipage__text" type="text" placeholder="Full Name" />
                <input className="logipage__text" type="text" placeholder="Username" />
                <input className="logipage__text" type="password" placeholder="Password" />
                <button className="login__button">Sign Up</button>
            </div>
        );
    }
}

export default SignUp;