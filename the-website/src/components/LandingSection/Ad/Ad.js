import React from 'react';
import classes from './Ad.module.css';

const Ad = () => {

    return (
        <div className={classes.__ad}>
            <div className={classes.__inside_section}></div>
            <span> The best fitness club in the town </span>
        </div>
    );
}

export default Ad;