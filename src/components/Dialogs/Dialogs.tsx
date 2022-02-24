import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";

type PropsDialogs = {
    dialogs: Array<any>,
    messages: Array<any>
}

function Dialogs(props: PropsDialogs) {
    const dialogsElements = props.dialogs.map(dialog=> <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.messages.map(message => <Message message={message.message}/>);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;