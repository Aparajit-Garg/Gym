import React from 'react'
import classes from "./TopDisplaySection.module.css";
import NavBar from '../NavBar/NavBar';
import Ad from "../Ad/Ad";
import TagLine from "../TagLine/TagLine";

const TopDisplaySection = () => {
  return (
    <div className={classes.top__section}>
        <div className={classes.left__side}>
            <NavBar />
            <Ad />
            <TagLine />
        </div>
        <div className={classes.right__side}>
            <h1>Hi</h1>
        </div>
      
    </div>
  )
}

export default TopDisplaySection;
