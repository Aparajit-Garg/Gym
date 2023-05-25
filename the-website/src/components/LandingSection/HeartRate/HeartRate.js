import React from 'react';
import classes from './HeartRate.module.css';
import HeartPNG from '../../../assets/heart.png';
import HeroImage from '../../../assets/hero_image.png';
import HeroImageBack from '../../../assets/hero_image_back.png';
import Calories from "../../../assets/calories.png";
import { motion } from 'framer-motion';

const HeartRate = () => {

    const transition = {type: 'spring', duration: 3};

    return (
        <>
            <motion.div className={classes.section}
                initial={{right: "-1rem"}}
                whileInView={{right:"4rem"}}
                transition={transition}
            >
                <img src={HeartPNG} alt="Heart" />
                <span> Heart Rate </span>
                <span> 116 bpm </span>
            </motion.div>
            <div className={classes.other__images}>
                <motion.img 
                    initial={{right: "1rem"}}
                    whileInView={{right: "8rem"}}
                    transition={transition}
                    src={HeroImage} alt="Hero"/>
                <img src={HeroImageBack} alt="Curved Lines" />
            </div>
            <motion.div 
                initial={{right: "37rem"}}
                whileInView={{right: "28rem"}}
                transition={transition}
                className={classes.calories}>
                <div className={classes.calories__image}>
                    <img src={Calories} alt="Calories" />
                </div>
                <div className={classes.calories__info}>
                    <span> Calories burned</span>
                    <span> 220 kCal </span>
                </div>
                
            </motion.div>
        </>

    );
}

export default HeartRate;