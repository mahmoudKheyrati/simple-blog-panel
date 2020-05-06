import React, {Component} from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import AppBar from './Components/AppBar.Component';
import {ThemeProvider} from '@material-ui/core/styles'
import {grey, red} from '@material-ui/core/colors';
import GridList from "./Components/GridList.component";
import posts from './DataProviders/GetPosts'
import NewPostDialogComponent from './Components/NewPostDialog.component'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomeView from "./views/Home.view";
import LoginView from "./views/Login.view";
import PostView from "./views/Post.view";

const theme = createMuiTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: grey["50"]
        },
        secondary: red,
    },
    typography: {
        fontFamily: 'IRANSans, sans-serif',
    },

});


class App extends Component {
    constructor() {
        super();
    }

    render() {

        return (

            <ThemeProvider theme={theme}>
                <Switch>
                    <Route path='/login' component={LoginView}/>
                    <Route path='/post' component={PostView}/>
                    <Route path='/' component={HomeView}/>

                </Switch>
            </ThemeProvider>
        );
    }

}


function loginRender() {

}

function postViewRender() {

}


export default App;



