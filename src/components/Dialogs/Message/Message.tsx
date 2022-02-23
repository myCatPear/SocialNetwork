import React from "react";
import classes from "./../Dialogs.module.css"

type PropsMessage = {
    message: string,
}

function Message(props: PropsMessage) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message;