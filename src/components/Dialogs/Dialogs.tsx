import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const dialogsData: Array<{ id: number; name: string }> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

const messageData: Array<{ id: number; message: string }> = [
    {id: 1, message: "hi"},
    {id: 2, message: "How is your IT CAMASUTRA"},
]

type PropsDialogItem = {
    name: string,
    id: number,
}

type PropsMessage = {
    message: string,
}

function DialogItem(props: PropsDialogItem) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props: PropsMessage) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>

            </div>
        </div>
    )
}

export default Dialogs;