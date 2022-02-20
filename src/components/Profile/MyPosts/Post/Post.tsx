import React from "react";
import classes from "./Post.module.css";

type PostPropsType = {
    message: string,
}

function Post(props:PostPropsType) {
    return <div className={classes.item}>
        <img src="https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg" alt=""/>
        {props.message}
        <div>
            <span>Like</span>
        </div>

    </div>
}

export default Post;