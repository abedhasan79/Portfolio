import React from "react";
import '../style.css';
import { motion } from "framer-motion";
import resumee from '../images/Abed Resume.pdf';
const styles = {

    icon: {
        fontSize: '48px',
        marginRight: '2vh',
    },

};
export default function resume() {

    return (
        <motion.div className="homeAnimate"
            initial={{ x: -1100 }}
            animate={{ x: 0 }}
            transition={{ type: 'keyframes' }}
        >
            <div className="resumepage" >
                <div className="resDown">
                    <h2 className="profText">Downlaod My Resume</h2>
                    <a href={resumee} className="logoColor"><i className="fa fa-file" style={styles.icon}></i></a>
                </div>

                <div className="proficiency">
                    <h2 className="profText">Front-End Proficiencies:</h2>
                    <div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="proficiency">
                    <h2 className="profText">Back-End Proficiencies:</h2>
                    <div >
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                            <li>Mern State</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};