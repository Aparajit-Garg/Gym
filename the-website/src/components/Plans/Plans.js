import classes from "./Plans.module.css";


const Plans = () => {

    return (
        <section>
            <div className={classes.tag__line}>
                <span> ready to start</span>
                <span>your journey</span>
                <span>with us</span>
            </div>
            <div className={classes.__plans}>
                <h1> Here are the plans</h1>
            </div>
        </section>
    );
}

export default Plans;