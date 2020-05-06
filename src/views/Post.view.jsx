import React, {Component} from "react";

class PostView extends Component{
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                sample
            </div>
        )
    }
}
export default PostView;

/*
    const text = '<blockquote><br></blockquote>\n' +
            '<p><br></p>\n' +
            '<h1 style="margin-left: 10px;">\n' +
            '    <ul>\n' +
            '        <li style="text-align: center;"><span style="color: rgb(0, 255, 255); background-color: rgb(0, 0, 0);">hi </span>every <span style="background-color: rgb(230, 145, 56); font-size: 60px;"><img src="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80" alt="aly" style="width: 300px;">one</span><span style="font-size: 14px;">&nbsp;</span></li>\n' +
            '        <li><span style="font-size: 14px;"><br></span></li>\n' +
            '    </ul>\n' +
            '</h1>\n' +
            '<h1 style="margin-left: 10px;"><br></h1>';

             <p dangerouslySetInnerHTML={{__html: text}}/>
 */