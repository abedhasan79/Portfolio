import React from "react";
import '../style.css';
import Typical from "react-typical";
import { motion } from "framer-motion";
import AnimatedText from 'react-animated-text-content';

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
            initial={{ x: -1100 }}
            animate={{ x: 0 }}
            transition={{ type: 'keyframes' }}
        >
            <div className="homepage" >
                <div>
                    {/* <h2>Hi There! </h2> */}
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        className="animated-paragraph hiText"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Hi There!
                    </AnimatedText>

                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={1.5}
                        className="animated-paragraph nameDiv"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        I'M Abed Hasan
                    </AnimatedText>
                    {/* <h2 className="">|Full Stack Web Developer|</h2> */}

                    <AnimatedText
                        type="chars" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={1.5}
                        className="animated-paragraph fullDev"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        |Full Stack Web Developer|
                    </AnimatedText>

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