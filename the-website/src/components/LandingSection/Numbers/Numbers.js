import React from "react";
import classes from "./Numbers.module.css";


const Numbers = () => {

    return (
        <div className={classes.main}>
            <span>
                <div>
                    +
                    140
                </div>
                <span className={classes.text__section}>Expert Coaches</span>
            </span>
            <span>
                <div>
                    +
                    978
                </div>
                <span className={classes.text__section}>Members Joined</span>
            </span>
            <span>
                <div>
                    +
                    50
                </div>
                <span className={classes.text__section}>fitness programs</span>
            </span>
        </div>
    );
}

export default Numbers;