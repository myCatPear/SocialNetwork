import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";

const dialogs: Array<{ id: number; name: string }> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

const messages: Array<{ id: number; message: string }> = [
    {id: 1, message: "hi"},
    {id: 2, message: "How is your IT CAMASUTRA"},
]

const dialogsElements = dialogs.map(dialog=> <DialogItem name={dialog.name} id={dialog.id}/>);
const messagesElements = messages.map(message => <Message message={message.message}/>);


function Dialogs() {
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