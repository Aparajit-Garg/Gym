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
        console.log(review);
        console.log(testimonialsData[0]);
    }, [count]);

    return (
        <div className={classes.top__most}>
            <div className={classes.left__section}>
                <span>Testimonials</span>
                <span> what they</span>
                <span>say about us</span>
                <span className={classes.review__section}>
                    <span> {review["review"]} </span>
                    <span className={classes.jj}>
                        <span>
                            <span> {review["name"]} </span>
                            <span> - {review["status"]}</span>
                        </span>
                        <span className={classes.arrow}>
                            <span>
                                <img src={leftArrow} alt="left arrow pic"/>
                            </span>
                            <span>
                                <img src={rightArrow} alt="right arrow pic" />
                            </span>
                        </span>
                    </span>
                    
                </span>
            </div>
            <div className={classes.right__section}>
                <span>

                </span>
            </div>
            
        </div>
    );
}

export default Testimonials;