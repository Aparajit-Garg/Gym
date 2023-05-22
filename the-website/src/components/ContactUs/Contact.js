import React, {useRef} from 'react';
import classes from "./Contact.module.css";
import  emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log("Successfull: ", result.text);
            window.alert("Mail sent");
            form.current.reset();
        }, (error) => {
            console.log("Error: ", error.text);
        });
    }

    return (
        <div className={classes.top__level}>
            <hr className={classes.line__section}></hr>
            <div className={classes.join__us}>
                <span>
                    <span className={classes.tranparent__background}> Ready to </span>
                    <span> level up</span>
                </span>
                <span>
                    <span>
                        <span>your body</span>
                        <span className={classes.tranparent__background}> with us? </span>
                    </span>
                    <span>
                        <form onSubmit={sendMail} ref={form}>
                            <input type="text" name="user_email" placeholder='Enter your email address here'/>
                            <button type="submit" onClick={sendMail}>Join now</button>
                        </form>
                    </span>
                </span>
            </div>
        </div>
    );
}

export default Contact;