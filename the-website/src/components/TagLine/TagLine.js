import React from "react";
import classes from "./TagLine.module.css";

const TagLine = () => {

    return (
        <div className={classes.tag__line}>
            <span>
                <h2 className={classes.transparent__text}> shape </h2>
                <h2> your</h2>
            </span>
            <span>
                <h2>ideal body</h2>
            </span>
            <span>
                <p>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
            </span>
        </div>
    );
}

export default TagLine;