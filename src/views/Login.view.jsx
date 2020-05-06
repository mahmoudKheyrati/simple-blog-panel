import React, {Component} from "react";
import './login.view.style.css'
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";
import {AccountCircle} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";


class LoginView extends Component {
    constructor() {
        super();
        this.state= {
            username:'',
            password:''

        }
    }

    login=()=>{
        console.log(this.state.username, this.state.password)

    };


    loginForm = {
        borderColor: grey[900],
        borderRadius: '8px',
        alignContent:'center'
    };
    background = {
        height: '100%',
        width: '100%',
        // backgroundImage:'url(../img/loginBackground.jpg)',
        overflow: 'hidden',
        objectFit: 'cover',
        backgroundPosition: 'top',
    };
    text = {
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:8,
        marginBottom:12,
        width: '230px',
        textAlign: 'center',
    };
    textInput = {
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '230px'

    };
    button = {
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:8,
        width: '230px'

    };
    image={
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '16px',
        width:48,
        height: 48,
    };
    text2 = {
        display:'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:8,
        marginBottom:12,
        width: '230px',
        textAlign: 'right',
        padding:'8px',
    };


// classes = this.useStyles();
    render() {
        return (
            <React.Fragment>
                <div id='s' className='login-background'>
                    <img src={'http://uupload.ir/files/y7h9_bg.jpg'} alt={'11'} style={this.background}/>

                    <Paper elevation={3} className={['login-form']} style={this.loginForm}>
                        <AccountCircle color={"error"} style={this.image}/>
                       <p color="secondary" style={this.text}><b>ورود به حساب </b></p>

                        <TextField
                            onChange={(event)=>{
                                this.state.username = event.target.value;
                            }}
                            className='text-filed'
                            variant={"filled"}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="نام کاربری"
                            type="text"
                            color={"secondary"}
                            style={this.textInput}
                        />
                        <TextField
                            onChange={(event)=>{
                                this.state.password = event.target.value;
                            }}
                            variant={"filled"}
                            margin="dense"
                            id="name"
                            label="رمز عبور"
                            type="password"
                            color={"secondary"}
                            style={this.textInput}

                        />
                        <Button variant={"contained"}

                                color={"secondary"}
                                style={this.button}
                                onClick={this.login}
                        >
                            ورود
                        </Button>
                        <p color="#2f2f2f" style={this.text2}>فراموشی رمز عبور</p>



                    </Paper>

                </div>


            </React.Fragment>


        )
    }
}

export default LoginView;