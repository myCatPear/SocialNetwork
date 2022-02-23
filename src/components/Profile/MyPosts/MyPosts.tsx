import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const postsData: Array<{ id: number; message: string; likesCount:number }> = [
    {id: 1, message: "hello", likesCount:12},
    {id: 2, message: "How are you?", likesCount:33},
    {id: 2, message: "How are you?", likesCount:33},
    {id: 2, message: "How are you?", likesCount:33},
    {id: 2, message: "How are you?", likesCount:33},
]

const postsElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

function MyPosts() {

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                        <textarea>

                        </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;