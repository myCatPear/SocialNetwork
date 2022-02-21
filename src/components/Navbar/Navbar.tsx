import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
        </div>
        <div className={`${classes.item}`}>
            <NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/settings">Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;