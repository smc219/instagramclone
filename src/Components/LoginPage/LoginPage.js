import React, { Component } from "react";
import "./LoginPage.css";
import Grid from '@mui/material/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import inst_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginPage: true
        }
    }

    changeLogin = () => {
        if (this.state.isLoginPage) {
            this.setState({ isLoginPage: false });
        } else {
            this.setState({ isLoginPage: true });
        }
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_image} width="454px" />
                            </div>
                            <div>
                                <div className="loginpage__rightcomponent">
                                    <img className="loginpage__logo" src={inst_logo} />
                                    <div className="loginPage__signin">

                                        {this.state.isLoginPage ? <SignIn /> : < SignUp />}

                                    </div>

                                    <div className="login__ordiv">
                                        <div className="login__divider"></div>
                                        <div className="login__or">OR</div>
                                        <div className="login__divider"></div>
                                    </div>

                                    <div className="login__fb">
                                        <img src={fb} width="15px" style={{ "marginRight": "5px" }} />Log in with Facebook
                                    </div>
                                    <div className="login__forgt"> Forgot password?</div>
                                </div>

                                <div className="loginpage__signupoption">
                                    {
                                        this.state.isLoginPage ?
                                            <div className="loginPage__signin">
                                                Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Sign up</span>
                                            </div> :
                                            <div className="loginPage__signup">
                                                Have an account? <span onClick={this.changeLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Sign in</span>
                                            </div>
                                    }

                                </div>

                                <div className="loginPage__downloadSection">
                                    <div>
                                        Get the app.
                                    </div>
                                    <div className="loginPage__option">
                                        <img className="loginPage__dwimg" src={appstore} width="136px" />
                                        <img className="loginPage__dwimg" src={playstore} width="136px" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;