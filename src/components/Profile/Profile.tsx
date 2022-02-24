import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props:any) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts obj={props.obj}/>
        </div>
    )
}

export default Profile;