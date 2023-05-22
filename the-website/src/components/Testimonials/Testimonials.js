import {useState, useEffect} from "react";
import classes from "./Testimonials.module.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {

    const [count, setCount] = useState(0);
    const [review, setReview] = useState({});


    useEffect(() => {
        setReview(testimonialsData[count]);
    }, [count]);

    return (
        <div className={classes.top__most}>
            <div className={classes.left__section}>
                <span>Testimonials</span>
                <span> what they</span>
                <span>say about us</span>
                <span className={classes.review__section}>
                    <span> {review["review"]} </span>
                    <span className={classes.reviewer__detail}>
                        <span> {review["name"]} </span>
                        <span> - {review["status"]}</span>
                    </span> 
                </span>
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
                    <span></span>
                    <span></span>
                    <span><img src={review["image"]} alt="reviewer pic" /></span>
                </span>
            </div>
            
        </div>
    );
}

export default Testimonials;