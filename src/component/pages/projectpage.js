import React from "react";
import '../style.css';
import { motion } from "framer-motion";
import projectOne from '../images/pokedex.png';
import projectTwo from '../images/projectTwo.png';
import projectThree from '../images/ambientics.png';
import projectFour from '../images/projectFour.png';
import projectFive from '../images/projectFive.png';
import projectSix from '../images/projectSix.png';
import apollodae from '../images/apollodae.png';

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
            <div className="project vh-100 scrollable-div" >

                <motion.div className="imgContainer"
                    initial={{ x: -1700 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={{ x: 10, y: 10 }}
                >
                    <img className="projectImgs" src={projectThree} alt="project"></img>
                    <div className="middle">
                        <a href="https://ambientics.herokuapp.com/" className="logoColor"><i className="fa fa-internet-explorer" style={styles.icon}></i></a>
                        <h6>Ambientics Environmental</h6>
                    </div>
                </motion.div>
                
                <motion.div className="imgContainer"
                    initial={{ x: -1700 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ x: 10, y: 10 }}
                >
                    <img className="projectImgs" src={apollodae} alt="project"></img>
                    <div className="middle">
                        <a href="https://apollodae001.herokuapp.com/" className="logoColor"><i className="fa fa-internet-explorer" style={styles.icon}></i></a>
                        <a href="https://github.com/abedhasan79/ApolloDAE" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                        <h6>ApolloDae</h6>
                    </div>
                </motion.div>

                <motion.div className="imgContainer"
                    initial={{ x: -1700 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
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
                    transition={{ delay: 0.6, duration: 0.5 }}
                    whileHover={{ x: 10, y: 10 }}
                >
                    <img className="projectImgs" src={projectOne} alt="project"></img>
                    <div className="middle">
                        <a href="https://abedhasan79.github.io/pokedex/" className="logoColor"><i className="fa fa-internet-explorer" style={styles.icon}></i></a>
                        <a href="https://github.com/abedhasan79/pokedex" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                        <h6>Pokedex</h6>
                    </div>
                </motion.div>

                <motion.div className="imgContainer"
                    initial={{ x: -1700 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
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