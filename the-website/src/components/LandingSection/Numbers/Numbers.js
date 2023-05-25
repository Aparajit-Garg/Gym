import React from "react";
import classes from "./Numbers.module.css";
import CountUp from "react-countup";

const Numbers = () => {

    return (
        <div className={classes.main}>
            <span>
                <div>
                    <CountUp end={140} start={100} duration="5" delay='0.5' prefix="+"></CountUp>
                </div>
                <span className={classes.text__section}>Expert Coaches</span>
            </span>
            <span>
                <div>
                    <CountUp end={978} start={900} duration="5" delay='0.5' prefix="+" />
                </div>
                <span className={classes.text__section}>Members Joined</span>
            </span>
            <span>
                <div>
                    <CountUp end={50} start={0} duration="5" delay='0.5' prefix="+" />
                </div>
                <span className={classes.text__section}>fitness programs</span>
            </span>
        </div>
    );
}

export default Numbers;