import React from "react";
import '../style.css';
import { motion } from "framer-motion";
import projectOne from '../images/projectOne.png';
import projectTwo from '../images/projectTwo.png';
import projectThree from '../images/projectThree.png';
import projectFour from '../images/projectFour.png';
import projectFive from '../images/projectFive.png';
import projectSix from '../images/projectSix.png';

const styles = {

    icon: {
        fontSize: '80px',
        marginRight: '2vh',
        marginLeft: '2vh',
    },

};
export default function projectPage() {
    return (
        <motion.div className="homeAnimate"
            initial={{ x: -1100 }}
            animate={{ x: 0 }}
            transition={{ type: 'keyframes' }}
        >
            <div className="project">
                <motion.div className="imgContainer"
                    initial={{ x: -1700 }}
                    animate={{ x: 0 }}
                    transition={{delay:0.4, duration:0.5}}
                    whileHover={{ x: 10, y: 10 }}
                >
                    <img className="projectImgs" src={projectTwo} alt="project"></img>
                    <div className="middle">
                        <a href="https://tea-gram.herokuapp.com/" className="logoColor"><i className="fa fa-internet-explorer" style={styles.icon}></i></a>
                        <a href="https://github.com/EsraWameed/teagram" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                        <h6>Teagram</h6>
                    </div>
                </motion.div>

                <motion.div className="imgContainer"
                    initial={{ x: -1700 }}
                    animate={{ x: 0 }}
                    transition={{delay:0.6, duration:0.5}}
                    whileHover={{ x: 10, y: 10 }}
                >
                    <img className="projectImgs" src={projectOne} alt="project"></img>
                    <div className="middle">
                        <a href="https://abedhasan79.github.io/Learning-My-Way/" className="logoColor"><i className="fa fa-internet-explorer" style={styles.icon}></i></a>
                        <a href="https://github.com/abedhasan79/Learning-My-Way" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                        <h6>LearningMyWay</h6>
                    </div>
                </motion.div>

                <motion.div className="imgContainer"
                    initial={{ x: -1700 }}
                    animate={{ x: 0 }}
                    transition={{delay:0.8, duration:0.5}}
                    whileHover={{ x: 10, y: 10 }}
                >
                    <img className="projectImgs" src={projectThree} alt="project"></img>
                    <div className="middle">
                        <a href="https://the-tech-blog-079.herokuapp.com/" className="logoColor"><i className="fa fa-internet-explorer" style={styles.icon}></i></a>
                        <a href="https://github.com/abedhasan79/The_Tech_Blog" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                        <h6>Tech-Blog</h6>
                    </div>
                </motion.div>

                <motion.div className="imgContainer"
                    initial={{ x: -1700 }}
                    animate={{ x: 0 }}
                    transition={{delay:1, duration:0.5}}
                    whileHover={{ x: 10, y: 10 }}
                >
                    <img className="projectImgs" src={projectFour} alt="project"></img>
                    <div className="middle">
                        <a href="https://text-editor-79.herokuapp.com/" className="logoColor"><i className="fa fa-internet-explorer" style={styles.icon}></i></a>
                        <a href="https://github.com/abedhasan79/Text-Editor" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                        <h6>J.A.T.E</h6>
                    </div>
                </motion.div>

                <motion.div className="imgContainer"
                    initial={{ x: -1700}}
                    animate={{ x: 0}}
                    transition={{delay:1.2, duration:0.5}}
                    whileHover={{ x: 10, y: 10 }}
                >
                    <img className="projectImgs" src={projectFive} alt="project"></img>
                    <div className="middle">
                        <a href="https://note-taker-79.herokuapp.com/" className="logoColor"><i className="fa fa-internet-explorer" style={styles.icon}></i></a>
                        <a href="https://github.com/abedhasan79/Note-Taker" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                        <h6>Note-Taker</h6>
                    </div>
                </motion.div>

                <motion.div className="imgContainer"
                    initial={{ x: -1700 }}
                    animate={{ x: 0 }}
                    transition={{delay:1.4, duration:0.5}}
                    whileHover={{ x: 10, y: 10 }}
                >
                    <img className="projectImgs" src={projectSix} alt="project"></img>
                    <div className="middle">
                        <a href="https://abedhasan79.github.io/Match-Colors/" className="logoColor"><i className="fa fa-internet-explorer" style={styles.icon}></i></a>
                        <a href="https://github.com/abedhasan79/Match-Colors" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                        <h6>Match-Colors</h6>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}