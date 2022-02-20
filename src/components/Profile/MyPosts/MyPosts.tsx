import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props:any) {
    debugger
    return <div className={classes.content}>
        <div>
            My posts
            <div>
                <textarea></textarea>
                    <button>Add post</button>
            </div>
            <div className={classes.posts}>
               <Post message='Hello'/>
            </div>
        </div>
    </div>
}

export default MyPosts;