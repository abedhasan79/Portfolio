import React, { useState } from "react";
import '../style.css';
import { motion } from "framer-motion";
const styles = {
    icon: {
        fontSize: '48px',
        marginRight: '2vh',
    },

};
export default function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a payload object with form data
        const payload = {
            name,
            email,
            subject,
            message
        };
        setIsSending(true);
        try {
            const response = await fetch('/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Form submitted successfully
                // alert('Message sent successfully');
                setIsSent(true);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                // Error occurred
                alert('An error occurred while sending the message');
            }


        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message');
        }
        setIsSending(false);
    };

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
                <motion.div className="container mt-5 " initial={{ x: -5000 }} animate={{ x: 0 }}>
                    <form onSubmit={handleSubmit} className="formContact">
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
                            <label className="form-label" htmlFor="subject">
                                Subject
                            </label>
                            <input className="form-control" type="text" id="subject" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>

                        <div className="frmbtn mb-3">
                            <button className="btn btn-danger" type="submit">
                                Send
                            </button>
                        </div>
                        {isSending
                            ?
                            <div class="alert alert-info" role="alert">
                                Sending Message ......
                            </div>
                            :
                            null
                        }
                        {isSent
                            ?
                            <div class="alert alert-success" role="alert">
                                Message Has Been Sent.
                            </div>
                            :
                            null
                        }
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};