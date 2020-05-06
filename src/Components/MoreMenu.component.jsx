import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import makeStyles from "@material-ui/core/styles/makeStyles";

const ITEM_HEIGHT = 48;

export default function MoreMenu(props) {
    let i = 0;
    const useStyles = makeStyles((theme) => ({
        item: {
            fontFamily: 'IRANSans, sans-serif',
            direction:'rtl'

        }
    }));
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (props, text) => {
        if (props.handleClick){

        props.handleClick(props, text);
        }
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {props.items.map((option) => (
                    <MenuItem className={classes.item} key={i++} selected={option === 'None'}
                              onClick={handleClose.bind(this, props, option)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
