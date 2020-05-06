import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React, {Component, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import SettingMenu from "./MoreMenu.component";
import NewPostDialogComponent from "./NewPostDialog.component";
import PasswordResetDialog from "./PasswordResetDialog.Component";
import {withMobileDialog} from "@material-ui/core";

let classInstance = null;
class Bar extends Component {
    constructor() {
        super();
        this.state = {
            addNewPostOpen: false,
            postDialogContent: '',
            changePasswordDialogOpen: false,


        }
        classInstance= this;
    }

    fabClickHandler = () => {
        this.setState({addNewPostOpen: true});
    };
    postDialogCloseHandler = () => {
        this.setState({addNewPostOpen: false});
    };
    postDialogSendHandler = (content) => {
        console.log('on send');
        console.log(content);
        this.postDialogCloseHandler();
    };

    render() {
        return (
            <this.AppBar2 fabClick={this.fabClickHandler}>
                <NewPostDialogComponent contnet={this.state.postDialogContent} open={this.state.addNewPostOpen}
                                        onClose={this.postDialogCloseHandler} onSend={this.postDialogSendHandler}/>
                <PasswordResetDialog open={this.state.changePasswordDialogOpen} onClose={() => {
                    console.log('close ----')
                }} onSend={(current, newPass, newPass2) => {
                    console.log(current, newPass, newPass2)
                }}
                />
            </this.AppBar2>

        );
    }
     menuItems = ['تغییر رمز عبور'];
     menuClickHandler = (props, text) => {
        switch (text) {
            case this.menuItems[0] :
                alert('hiiii')
                this.setState({changePasswordDialogOpen: true})

                break;
        }

    };


     AppBar2= (props) =>{
        const useStyles = makeStyles((theme) => ({

            search: {

                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: "#e7e7e7",
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(3),
                    width: 'auto',
                },
            },
            searchIcon: {
                padding: theme.spacing(0, 2),
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            inputRoot: {
                color: 'inherit',
            },
            inputInput: {
                direction: 'rtl',
                fontFamily: 'IRANSans, sans-serif',
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('md')]: {
                    width: '20ch',
                },
            },


            appBar: {
                top: 0,
                padding: theme.spacing(2)
                // bottom: 0,
            },
            grow: {
                flexGrow: 1,
            },
            fabButton: {
                fontFamily: 'IRANSans, sans-serif'
            },

        }));
        const classes = useStyles();


        return (
            <AppBar position={"absolute"} color={"transparent"} className={classes.appBar} elevation={0}>
                <Toolbar>

                    <Fab onClick={props.fabClick} variant="extended" color="secondary" aria-label="add"
                         className={classes.fabButton}>
                        <AddIcon/>
                        نوشتن پست جدید
                    </Fab>



                    <div className={classes.grow}/>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="جستجو..."
                            classes={{
                                rtl: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>

                    <SettingMenu handleClick={(props, text) => {
                        console.log('from appbar -- ', text);
                    }} items={this.menuItems} handleClick={this.menuClickHandler}/>

                    {
                        props.children
                    }


                </Toolbar>
            </AppBar>

        );
    }
}




export default Bar;
