import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props: any) {
    const postsData: Array<{ id: number; message: string; likesCount:number }> = [
        {id: 1, message: "hello", likesCount:12},
        {id: 2, message: "How are you?", likesCount:33},
    ]
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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )

}

export default MyPosts;