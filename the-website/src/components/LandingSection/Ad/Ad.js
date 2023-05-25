import React from 'react';
import classes from './Ad.module.css';
import {motion} from 'framer-motion';

const Ad = () => {

    const transition = {type: 'spring', duration: 3};

    return (
        <div className={classes.__ad}>
            <motion.div 
                    initial={{left: '238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition, type:"tween"}}
                >
            </motion.div>
            
            <span> The best fitness club in the town </span>
        </div>
    );
}

export default Ad;