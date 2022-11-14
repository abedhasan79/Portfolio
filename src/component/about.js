import React from "react";
import profileImg from './images/profile-pic.jpg'
import './style.css'
const styles ={
    mainCard:{
        display:'flex',
        flexWrap:'wrap',
        color:'white',
    },
    
    img:{
        height:'400px',
        width:'400px',
    }
};
export default function about() {
    return (
        <div  style={styles.mainCard}>
            <div >
                <div>
                    <h2>About Me</h2>
                </div>

                <div >
                    <img src={profileImg} alt="Profile visual of creator" style={styles.img}/>
                </div>
                <div>
                    <p>Full Stack Web Developer with a background in Applied
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
            </div>
        </div>

    );
}