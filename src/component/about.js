import React from "react";
import profileImg from './images/profile-pic.jpg'
import './style.css'
const styles = {
    mainCard: {
        display: 'flex',
        flexWrap: 'wrap',
        color: 'white',
    },

    img: {
        height: '400px',
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
        <div className="about">
            <div className="my-img">
                <img src={profileImg} alt="Profile visual of creator" style={styles.img} />
            </div>

            <div >
                <div className="text-center">
                    <h2 className="aboutMeText">About Me</h2>
                </div>
                <div>
                    <p className="about-p-tag">Full Stack Web Developer with a background in Applied
                        Mathematics and life-long dedication to learning.
                        Currently a student at University of Toronto coding
                        bootcamp. Gaining a vast array of knowledge in many
                        different front end and back end languages, responsive
                        frameworks, databases, and best code practices. My
                        objective is simply to be the best web developer that
                        I can be and to contribute to the technology industry
                        all that I know and can do. Effective at combining
                        creativity and problem solving to develop user-friendly
                        applications. Known among staff for strong wit and
                        attention to detail no matter the complexity of the
                        project.
                    </p>
                </div>
                <div className="logo-git-lin">
                    <a href="https://github.com/abedhasan79" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                    <a href="https://www.linkedin.com/in/abed-hasan-965497222/" className="logoColor"><i className="fa fa-linkedin-square" style={styles.icon}></i></a>
                </div>
            </div>

        </div>

    );
}