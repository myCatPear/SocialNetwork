import React from "react";
import classes from "./Profile.module.css";

function Profile() {
    return <div className={classes.content}>
        <div>
            <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" alt=""/>
        </div>
        <div>
            ava + descr
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    Post1
                </div>
                <div className={classes.item}>
                    Post2
                </div>
            </div>
        </div>

    </div>
}

export default Profile;