import React from "react";
import '../style.css';
import { motion } from "framer-motion";
const styles = {
    icon: {
        fontSize: '48px',
        marginRight: '2vh',
    },

};
export default function contactPage() {

    return (
        <motion.div className="homeAnimate"
            initial={{ x: -1100 }}
            animate={{ x: 0 }}
            transition={{ type: 'keyframes' }}
        >
            <div className="contact">
                <div className="contactInfo">
                    <h2>Contact Me:</h2>
                    <h6>Email: abedhasan79@gmail.com</h6>
                    <h6>Phone: +1 204-807-3955</h6>

                    <a href="https://www.linkedin.com/in/abed-hasan-965497222/" className="logoColor logo-git-lin-contact"><i className="fa fa-linkedin-square" style={styles.icon}></i></a>

                </div>
                <motion.div className="container mt-5 "  initial={{x:-5000}} animate={{x:0}}>
                    <form className="formContact">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>

                        <div className="frmbtn">
                            <button className="btn btn-danger" type="submit">
                                Send
                            </button>
                        </div>

                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};