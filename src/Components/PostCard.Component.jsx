import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardActionsArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import MoreMenu from "./MoreMenu.component";

const menuItems = ['ویرایش', 'حذف'];
const handleMenuClick = (props, text) => {
    console.log('from card ', text);
};


export default function (props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: 345,
            height: 'auto',
            // maxHeight:'auto',
            maxWidth: 345,
            marginLeft: 24,
            marginTop: 16,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9

        },

        avatar: {
            // backgroundColor: grey[500],
        },


        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }));
    const classes = useStyles();

    return (

        <Card className={classes.root} onClick={() => {

        }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={props.item.profileImage}>

                        R
                    </Avatar>
                }
                action={
                    <MoreMenu items={menuItems} handleClick={handleMenuClick}/>
                }
                title={props.item.title}
                subheader={props.date}
            />
            <CardActionsArea>

                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    title={props.item.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{props.item.text}

                    </Typography>
                </CardContent>
            </CardActionsArea>


            {/*<CardActions>*/}
            {/*    <IconButton aria-label="add to favorites">*/}
            {/*        <FavoriteIcon/>*/}
            {/*    </IconButton>*/}
            {/*    <IconButton aria-label="share">*/}
            {/*        <ShareIcon/>*/}
            {/*    </IconButton>*/}
            {/*    <IconButton aria-label="share">*/}
            {/*        <AddIcon/>*/}
            {/*    </IconButton>*/}

            {/*</CardActions>*/}

        </Card>
    );
}
