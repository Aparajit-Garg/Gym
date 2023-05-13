import React from 'react';
import classes from "./Buttons.module.css";

const Buttons = () => {

    return (
        <div>
            <button className={classes.get__started}> Get Started </button>
            <button className={classes.learn__more}> Learn More </button>
        </div>
    );
}

export default Buttons;