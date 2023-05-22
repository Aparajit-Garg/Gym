import React from 'react';
import classes from "./SocialPages.module.css";
import githubLink from "../../assets/github.png";
import instagramLink from "../../assets/instagram.png";
import linkedinLink from "../../assets/linkedin.png";
import gymLogo from "../../assets/logo.png";


const SocialPages = () => {

    return (
        <section>
            <hr />
            <div className={classes.complete__section}>
                <span className={classes.link__section}>
                    <a href="https://github.com/Aparajit-Garg" target="_blank"><img src={githubLink} alt="github link" /></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src={instagramLink} alt="instagram link" /></a>
                    <a href="https://www.linkedin.com/in/aparajit-garg/" target="_blank"><img src={linkedinLink} alt="linkedin link" /></a>
                </span>
                <span className={classes.gym__logo}>
                    <a href="/"><img src={gymLogo} alt="gym logo" /></a>
                </span>
            </div>
        </section>
    );
}

export default SocialPages;