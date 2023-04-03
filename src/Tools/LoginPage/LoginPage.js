import React, { Tools } from "react";
import Grid from "@material-ui/core/Grid";
import './LoginPage.css';
import inst_image from '../../images/9364675fb26a.svg';
import fb from '../../images/fbPic.png';
import inst_logo from '../../images/instaLogo.png';
import appstore from '../../images/downAppStore.png';
import playstore from '../../images/googlePlay.png';

class LoginPage extends Tools{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs = {2}>

                    </Grid>
                    <Grid item xs = {6}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_image}width = "450"/>
                            </div>
                            <div>
                                <div className="loginpage__rightcomponent">
                                    <img className="loginpage__logo" src={inst_logo}/>
                                <div>
                                    <div className="loginpage__signin">
                                        <input className="loginpage__text" text = {"text"} placeholder = {"Phone number, email or username"}/>
                                        <input className="loginpage__text" type={"password"} placeholder = {"Password"}/>
                                        <button className="login_button">Log In</button>
                                    </div>
                                    <div className="login__ordiv">
                                        <div className="login__dividor"></div>
                                        <div className = "login __or">OR</div>
                                        <div className="login__dividor"></div>
                                    </div>
                                    <div className="login__fb">
                                            <img src={fb} width="15px" style={{ "marginRight":"5px" }} />Log in with Facebook
                                        </div>
                                        <div className="login_forgt"> Forgot password?</div>
                                </div>
                            </div>
                            <div className="loginpage__signupoption">
                                    {
                                        this.state.isLogin ?
                                        <div className="loginPage__signin">
                                                 Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign up</span>
                                        </div> :
                                        <div className="loginPage__signup">
                                                Have an account? <span onClick={this.changeLogin}  style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign in</span>
                                        </div>
                                    } 
                                </div>
                                <div className="loginPage__downloadSection">
                                    <div>
                                    Get the app.
                                    </div>
                                    <div className="loginPage__option">
                                        <img className="loginPage_dwimg" src={appstore} width="136px" />
                                        <img className="loginPage_dwimg" src={playstore} width="136px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs = {3}>
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage
