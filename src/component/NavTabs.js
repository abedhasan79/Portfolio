import React from "react";
import { motion } from "framer-motion";

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav ">
            <motion.li className="nav-item"
                whileTap={{ x: 10 }}
            >

                <a
                    href="#home"
                    onClick={() => {
                        handlePageChange('Home');

                    }}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>

            </motion.li>

            <motion.li className="nav-item"
                whileTap={{ x: 10 }}
            >

                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}

                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>

            </motion.li>

            <motion.li className="nav-item"
                whileTap={{ x: 10 }}
            >

                <a
                    href="#project"
                    onClick={() => handlePageChange('Project')}

                    className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </a>

            </motion.li>
            <motion.li className="nav-item"
                whileTap={{ x: 10 }}
            >

                <a
                    href="#contact"

                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>

            </motion.li>
        </ul>
    );
}

export default NavTabs;