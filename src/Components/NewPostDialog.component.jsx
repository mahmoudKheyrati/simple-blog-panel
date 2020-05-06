import React, {Component, useRef, useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import JoditEditor from "jodit-react";
import './NewPostDialog.styles.css'

let textContent = '';
function getContent() {
    console.log('content : ', textContent)
    return textContent;

}
const Editor = (props) => {
    const editor = useRef(null);
    const config = {
        readonly: false,

    };
    return (
        <JoditEditor
            style='font-family:IRANSans, sans-serif'
            size={40}
            ref={editor}
            value={props.content}
            config={config}
            tabIndex={4} // tabIndex of textarea
            onBlur={newContent => textContent = newContent} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => {
            }}
        />
    );
};

class NewPostDialogComponent extends Component {
    // handleOpen = (isOpen) => {
    //     if (isOpen) {
    //         console.log('is open')
    //     } else {
    //         console.log('close')
    //     }
    //
    // };
    //
    // async shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     this.handleOpen(nextProps.open)
    // }

     render() {
         return (
            <div>
                <Dialog className={'rtl dialog'}
                        open={this.props.open}
                        fullScreen
                        onClose={this.props.onClose}

                > <DialogActions>
                    <Button onClick={this.props.onClose} color="secondary" className={'button'}>
                        لغو
                    </Button>
                    <Button onClick={this.props.onSend.bind(this,  getContent())} color="secondary" variant={"contained"} className={'button'}>
                        ارسال
                    </Button>
                </DialogActions>

                    {/*<DialogTitle className={classes.container} id="form-dialog-title">نوشتن پست جدید</DialogTitle>*/}
                    <DialogContent>
                        <Editor content={this.props.content}/>
                    </DialogContent>

                </Dialog>
            </div>

        );
    }

}

export default NewPostDialogComponent;