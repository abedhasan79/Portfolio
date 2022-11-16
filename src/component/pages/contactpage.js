import React from "react";
import '../style.css';

const styles = {
    icon: {
        fontSize: '48px',
        marginRight: '2vh',
    },

};
export default function contactPage() {

    return (
        <div className="contact">
            <div className="contactInfo">
                <h2>Contact Me:</h2>
                <h5>Email: abedhasan79@gmail.com</h5>
                <h5>Phone: +1 204-807-3955</h5>
                <div className="logo-git-lin-contact">
                    <a href="https://www.linkedin.com/in/abed-hasan-965497222/" className="logoColor"><i className="fa fa-linkedin-square" style={styles.icon}></i></a>
                </div>
            </div>
            <div className="container mt-5 ">
                <form className="formContact">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input className="form-control" type="text" id="name" required />
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

                    <button className="btn btn-danger" type="submit">
                        Send
                    </button>

                </form>
            </div>
        </div>

    );
};