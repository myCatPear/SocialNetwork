import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;