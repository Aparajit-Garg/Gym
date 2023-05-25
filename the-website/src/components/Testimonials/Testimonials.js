import {useState, useEffect} from "react";
import classes from "./Testimonials.module.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";


const Testimonials = () => {

    const [count, setCount] = useState(0);
    const [review, setReview] = useState({});

    const transition = {type: 'spring', duration: 3};

    useEffect(() => {
        setReview(testimonialsData[count]);
    }, [count]);

    return (
        <div className={classes.top__most}>
            <div className={classes.left__section}>
                <span>Testimonials</span>
                <span> what they</span>
                <span>say about us</span>
                <motion.span className={classes.review__section}
                    key={count}
                    initial={{opacity: 0, x:-100}}
                    exit={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition= {{...transition, duration: 2}}
                    >
                    <span> {review["review"]} </span>
                    <span className={classes.reviewer__detail}>
                        <span> {review["name"]} </span>
                        <span> - {review["status"]}</span>
                    </span> 
                </motion.span>
            </div>
            <div className={classes.right__section}>
                <span className={classes.arrow}>
                    <span>
                        <img onClick={()=>count > 0 ? setCount(count - 1) : setCount(2)} src={leftArrow} alt="left arrow pic"/>
                    </span>
                    <span>
                        <img onClick={()=>count < 2 ? setCount(count + 1) : setCount(0)} src={rightArrow} alt="right arrow pic" />
                    </span>
                </span>
                <span>
                    <motion.span
                        initial={{opacity: 0, x:-100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{...transition, duration: 2}}
                    ></motion.span>
                    <motion.span
                        initial={{opacity: 0, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{...transition, duration: 2}}
                    ></motion.span>
                    <span>
                        <motion.img 
                            key={count}
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: -100}}
                            transition={{...transition, duration: 2}}
                            src={review["image"]} alt="reviewer pic" /></span>
                </span>
            </div>
            
        </div>
    );
}

export default Testimonials;