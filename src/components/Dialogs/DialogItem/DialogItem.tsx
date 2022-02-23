import React from "react";
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type PropsDialogItem = {
    name: string,
    id: number,
}

function DialogItem(props: PropsDialogItem) {
    let path = "/dialogItem/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;