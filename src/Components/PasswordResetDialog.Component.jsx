import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dialog: {
        margin: '0 auto',
        width: 350,
        direction: 'rtl'
    },
    rtl: {},
    input: {
        margin: theme.spacing(1),
    }
}));

class PasswordResetDialog extends Component {
    constructor() {
        super();
        this.state = {
            currentPassword: '',
            newPassword: '',
            newPasswordRepeat: '',
        }

    }

    render() {

        const {classes} = this.props;
        return (
            <Dialog className={[classes.rtl, classes.dialog]}
                    open={this.props.open}
                    onClose={this.props.onClose}

            >
                <DialogTitle id="form-dialog-title">تغییر رمز عبور</DialogTitle>
                <DialogContent>

                    <TextField
                        onChange={(event) => {
                            this.state.currentPassword = event.target.value;
                        }}
                        className={classes.input}
                        variant={"filled"}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="رمز عبور فعلی"
                        type="password"
                        color={"secondary"}
                    />
                    <TextField
                        onChange={(event) => {
                            this.state.newPassword = event.target.value;
                        }}
                        className={classes.input}
                        variant={"filled"}
                        margin="dense"
                        id="name"
                        label="رمز عبور جدید"
                        type="password"
                        color={"secondary"}
                    />
                    <TextField
                        onChange={(event) => {
                            this.state.newPasswordRepeat = event.target.value;
                        }}
                        className={classes.input}
                        variant={"filled"}
                        margin="dense"
                        id="name"
                        label="تکرار رمز عبور جدید"
                        type="password"
                        color={"secondary"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="secondary" className={classes.rtl}>
                        لغو
                    </Button>
                    <Button
                        onClick={this.props.onSend.bind(null, this.state.currentPassword.trim(), this.state.newPassword.trim(), this.state.newPasswordRepeat.trim())}
                        color="secondary" className={classes.rtl}>
                        تغییر رمز عبور
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}

export default withStyles(useStyles)(PasswordResetDialog);
