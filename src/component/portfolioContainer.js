import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/about'
import Homepage from './pages/homepage'
import Projects from './pages/projectpage'
import Contact from './pages/contactpage'
import Resume from './pages/resumepage'
const styles = {

    icon: {
        fontSize: '30px',
        marginRight: '2vh',
    },

};
export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Homepage />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='navBar '>

            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className='vh-100 pt-5 mb-5'>
                {renderPage()}
            </div>

            <footer className="logo-git-lin footer">

                <a href="https://github.com/abedhasan79" className="logoColor"><i className="fa fa-github" style={styles.icon}></i></a>
                <a href="https://www.linkedin.com/in/abed-hasan-965497222/" className="logoColor"><i className="fa fa-linkedin-square" style={styles.icon}></i></a>
                <a href="https://www.instagram.com/abed9390/" className="logoColor"><i className="fa fa-instagram" style={styles.icon}></i></a>

            </footer>
        </div>
    );
}