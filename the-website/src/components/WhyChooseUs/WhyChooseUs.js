import classes from "./WhyChooseUs.module.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tickImage from "../../assets/tick.png";
import nbPic from "../../assets/nb.png";
import nikePic from "../../assets/nike.png";
import adidasPic from "../../assets/adidas.png";


const WhyChooseUs = () => {

    return (
        <div className={classes.choose__us}>
            <div className={classes.__images}>
                <div className={classes.__first}>
                    <img src={image1} alt="Gym pic 1" />
                </div>
                <div className={classes.__second}>
                    <img src={image2} alt="Gym pic 2" />
                    <div className={classes.__third}>
                        <img src={image3} alt="Gym pic 3" />
                        <img src={image4} alt="Gym pic 4" />
                    </div>
                   
                </div>
                
            </div>
            <div className={classes.__reasons}>
                <span>some reasons</span>
                <div className={classes.why__section}>
                    <span> why </span> 
                    <span> choose us?</span>
                </div>
                
                <div className={classes.__pointers}>
                    <img src={tickImage} alt="tick pic" />
                    <span>over 140+ expert coaches</span>
                </div>
                <div className={classes.__pointers}>
                    <img src={tickImage} alt="tick pic" />
                    <span>train smarter and faster than before</span>
                </div>
                <div className={classes.__pointers}>
                    <img src={tickImage} alt="tick pic" />
                    <span>1 free program for new member</span>
                </div>
                <div className={classes.__pointers}>
                    <img src={tickImage} alt="tick pic" />
                    <span>reliable partners</span>
                </div>
                <div className={classes.__partners}>
                    <span>our partners</span>
                    <span>
                        <img src={nbPic} alt="nb pic" />
                        <img src={adidasPic} alt="adidas pic" />
                        <img src={nikePic} alt="Nike pic" />
                    </span>
                    
                </div>

            </div>

            
        </div>
    );
}

export default WhyChooseUs;