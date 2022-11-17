import React from "react";
import '../style.css';
import Typical from "react-typical";
import { motion } from "framer-motion";

const skills = ['HTML', 500, 'CSS', 500, 'JavaScript', 500,
    'JQuery', 500, 'Bootstrap', 500, 'Server Side Api', 500,
    'Node.js', 500, 'Express', 500,
    'MySQL', 500, 'NoSQL: MongoDB', 500, 'GraphQL', 500,
    'Progressive Web Application', 500,
    'Local Storage', 500,
    'Session Storage', 500,
    'IndexedDB', 500,
    'React.js', 500,
    'RESET', 500,
    'JSON', 500,
    'AJAX(Fetch API)', 500,
    'HTTP request method', 500,
    'Mern Stack', 500,
    'Java', 500,
    'Python', 500,
    'Git Github', 500,
];




export default function homepage() {

    return (
        <motion.div className="homeAnimate"
            initial={{x:-1100}}
            animate={{x:0}}
            transition={{  type:'keyframes'  }}
        >
            <div className="homepage" >
                <div>
                    <h2>Hi There! </h2>
                    <div className="nameDiv">
                        <h2>I'M <span className="myName">
                            <span className="nameLetter nameLetterAH">A</span><span className="nameLetter">B</span><span className="nameLetter">E</span><span className="nameLetter">D</span>
                            <span className="nameLetter nameLetterAH"> H</span><span className="nameLetter">A</span><span className="nameLetter">S</span><span className="nameLetter">A</span><span className="nameLetter">N</span>
                        </span></h2>
                    </div>
                    <h2 className="">|Full Stack Web Developer|</h2>

                    <span className="skillsList">
                        <Typical
                            steps={skills}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </span>

                </div>

            </div>
        </motion.div>
    );
};