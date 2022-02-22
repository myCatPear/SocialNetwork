import React from "react";
import classes from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;