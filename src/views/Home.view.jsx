import React, {Component} from "react";
import GridList from "../Components/GridList.component";
import AppBar from "../Components/AppBar.Component";
import posts from "../DataProviders/GetPosts";


class HomeView  extends Component{
   constructor() {
       super();
       this.state = {
           posts: posts,
           open: true
       }
   }
    componentDidMount() {
        // setTimeout(() => {
        //     this.state.posts.push({
        //         title: "mahmoud",
        //         text: 'some text'
        //     });
        //     this.setState(posts);
        //
        // }, 3000)
    }

    render() {
       return(
           <React.Fragment>
               <GridList messages={this.state.posts}/>
               <AppBar state={this.state}/>
           </React.Fragment>
       )
   }
}
export default HomeView;