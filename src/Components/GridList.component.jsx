import GridList from "@material-ui/core/GridList";
import Card from "./PostCard.Component";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
export default function (props) {
    let i = 0 ;
    const useStyles = makeStyles((theme) => ({
        gridList: {
            width: '100%',
            height: '100%',
            paddingBottom:theme.spacing(5),
            // marginBottom: theme.spacing(20),
            margin :theme.spacing(0,'auto',20,'auto'),
            paddingTop: theme.spacing(12),
        }
    }));
    const classes = useStyles();

    return(
        <GridList cellHeight={450} cols={4} className={classes.gridList}>
            {props.messages.map((item) => (

                <Card item={item} button key={i++} />
            ))}
        </GridList>
    );
}
