import React from "react";
import profileImg from '../images/profile-pic.jpg'
import '../style.css'
import { motion } from "framer-motion";
import AnimatedText from 'react-animated-text-content';
const styles = {
    mainCard: {
        display: 'flex',
        flexWrap: 'wrap',
        color: 'white',
    },

    img: {
        maxHeight: '400px',
        maxWidth: '400px',
        borderRadius: '200px'
    },
    icon: {
        fontSize: '48px',
        marginRight: '2vh',
    },

};
export default function about() {
    return (
        <motion.div className="homeAnimate"
            initial={{ x: -1100 }}
            animate={{ x: 0 }}
            transition={{ type: 'keyframes' }}
        >
            <div className="about">
                <div className="my-img">
                    <img src={profileImg} alt="Profile visual of creator" style={styles.img} className="myImg" />
                </div>

                <div >
                    <div className="text-center">
                        <h2 className="aboutMeText"><span className="textAbout">About Me</span></h2>
                    </div>
                    <div>
                        <AnimatedText
                            type='words'
                            interval={0.05}
                            duration={0.08}
                            animation={{
                              ease: 'ease-in-out',
                              scale: -5,
                            }}
                            className="about-p-tag"
                            
                        >
                            Full Stack Web Developer with a background in Applied
                            Mathematics and life-long dedication to learning.
                            Graduated from University of Toronto coding
                            bootcamp. Gained a vast array of knowledge in many
                            different front end and back end languages, responsive
                            frameworks, databases, and best code practices. My
                            objective is simply to be the best web developer that
                            I can be and to contribute to the technology industry
                            all that I know and can do. Effective at combining
                            creativity and problem solving to develop user-friendly
                            applications. Known among staff for strong wit and
                            attention to detail no matter the complexity of the
                            project.
                        </AnimatedText>
                    
                    </div>
                    <div className="logo-git-lin">
                        <a href="https://github.com/abedhasan79" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                        <a href="https://www.linkedin.com/in/abed-hasan-965497222/" className="logoColor"><i className="fa fa-linkedin-square" style={styles.icon}></i></a>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}