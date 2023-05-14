import classes from "./Programs.module.css";
import {programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {

    return (
        <div className={classes.program__section}>
            <div className={classes.program__text}>
                <h1 className={classes.transparent__text}> explore our</h1>
                <h1>programs</h1>
                <h1 className={classes.transparent__text}>to shape you</h1>
            </div>
            <div className={classes.program__cards}>
            {programsData.map((programs)=> (
                <div className={classes.cards}>
                    {programs.image}
                    <span>{programs.heading}</span>
                    <span>{programs.details}</span>
                    <div className={classes.join__now}>
                        <button>Join Now</button>
                        <img src={RightArrow} alt="Right arrow" />
                    </div>
                    
                </div>
            ))}
            </div>
        </div>
    );
}

export default Programs;