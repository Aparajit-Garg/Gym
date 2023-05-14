// import React from 'react'
import classes from "./TopDisplaySection.module.css";
import NavBar from '../NavBar/NavBar';
import Ad from "../Ad/Ad";
import TagLine from "../TagLine/TagLine";
import Numbers from '../Numbers/Numbers';
import Buttons from '../Buttons/Buttons';
import HeartRate from '../HeartRate/HeartRate';

const TopDisplaySection = () => {
  return (
    <div className={classes.top__section}>
        <div className={classes.left__side}>
            <NavBar />
            <Ad />
            <TagLine />
            <Numbers />
            <Buttons />
        </div>
        <div className={classes.right__side}>
            <button>Join Now</button>
            <HeartRate />
        </div>
      
    </div>
  )
}

export default TopDisplaySection;
