import React from 'react';
import classes from './HeartRate.module.css';
import HeartPNG from '../../../assets/heart.png';
import HeroImage from '../../../assets/hero_image.png';
import HeroImageBack from '../../../assets/hero_image_back.png';
import Calories from "../../../assets/calories.png";

const HeartRate = () => {

    return (
        <>
            <div className={classes.section}>
                <img src={HeartPNG} alt="Heart" />
                <span> Heart Rate </span>
                <span> 116 bpm </span>
            </div>
            <div className={classes.other__images}>
                <img src={HeroImage} alt="Hero"/>
                <img src={HeroImageBack} alt="Curved Lines" />
            </div>
            <div className={classes.calories}>
                <div className={classes.calories__image}>
                    <img src={Calories} alt="Calories" />
                </div>
                <div className={classes.calories__info}>
                    <span> Calories burned</span>
                    <span> 220 kCal </span>
                </div>
                
            </div>
        </>

    );
}

export default HeartRate;