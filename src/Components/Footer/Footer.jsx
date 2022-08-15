import React from 'react';
import './Footer.css';


const footerContent = [
    "Get to Know Us",
    "Connect with Us",
    "Make Money with Us",
    "Let Us Help You"
]

export const Footer = () => {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    
    return (
        <div className='footer-container'>
            <button id="back-to-top-btn" onClick={handleBackToTop}>Back to top</button>
            <div className="footer-content">
                {
                    footerContent.map(c => <h4 key={c}>{c}</h4>)
                }
            </div>
            <div className="copyright-container">
                <span>Copyright	&#169; 2022</span>
            </div>
        </div>
    )
}
