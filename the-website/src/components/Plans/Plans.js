import classes from "./Plans.module.css";
import tickImage from "../../assets/whiteTick.png"; 
import rightArrow from "../../assets/rightArrow.png";


const Plans = () => {

    return (
        <section>
            <div className={classes.tag__line}>
                <span> ready to start</span>
                <span>your journey</span>
                <span>with us</span>
            </div>
            <div className={classes.__plans}>
                <div className={classes.plans__card}>
                    {/* <img src={} alt="pic" /> */}
                    <span>basic plan</span>
                    <span className={classes.plans__price}>
                        <span>$</span>
                        <span>25</span>
                    </span>
                    
                    <div className={classes.plan__details}>
                        <span className={classes.plan__pointers}>
                            <img src={tickImage} alt="tick pic" />
                            <span>2 hours of exercises</span>
                        </span>
                        <span className={classes.plan__pointers}>
                            <img src={tickImage} alt="tick pic" />
                            <span>Free consultation to coaches</span>
                        </span>
                        <span className={classes.plan__pointers}>
                            <img src={tickImage} alt="tick pic" />
                            <span>Access to the community</span>
                        </span>
                        <span>
                            <span>See more benefits</span>
                            <img src={rightArrow} alt="" />
                        </span>
                        <button>Join Now</button>
                        
                    </div>
                </div>
                <div className={classes.plans__card}>
                    {/* <img src={} alt="pic" /> */}
                    <span>premium plan</span>
                    <span className={classes.plans__price}>
                        <span>$</span>
                        <span>30</span>
                    </span>
                    
                    <div className={classes.plan__details}>
                        <span className={classes.plan__pointers}>
                            <img src={tickImage} alt="tick pic" />
                            <span>5 hours of exercises</span>
                        </span>
                        <span className={classes.plan__pointers}>
                            <img src={tickImage} alt="tick pic" />
                            <span>Free consultation to coaches</span>
                        </span>
                        <span className={classes.plan__pointers}>
                            <img src={tickImage} alt="tick pic" />
                            <span>Access to minibar</span>
                        </span>
                        <span>
                            <span>See more benefits</span>
                            <img src={rightArrow} alt="" />
                        </span>
                        <button>Join Now</button>
                    </div>
                </div>
                <div className={classes.plans__card}>
                    {/* <img src={} alt="pic" /> */}
                    <span>pro plan</span>
                    <span className={classes.plans__price}>
                        <span>$</span>
                        <span>45</span>
                    </span>
                    
                    <div className={classes.plan__details}>
                        <span className={classes.plan__pointers}>
                            <img src={tickImage} alt="tick pic" />
                            <span>8 hours of exercises</span>
                        </span>
                        <span className={classes.plan__pointers}>
                            <img src={tickImage} alt="tick pic" />
                            <span>Consultation of Private Coach</span>
                        </span>
                        <span className={classes.plan__pointers}>
                            <img src={tickImage} alt="tick pic" />
                            <span>Free Fitness Merchandises</span>
                        </span>
                        <span>
                            <span>See more benefits</span>
                            <img src={rightArrow} alt="" />
                        </span>
                        <button>Join Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Plans;