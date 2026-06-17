const Footer = () => {
    return (
        <footer className="footer-custom text-center p-4" style={{ backgroundColor: '#0a0a0a', borderTop: '2px solid #c0c0c0' }}>
            <p className="mb-2" style={{ color: '#a9a9a9' }}>&copy; 2026 AetherWorkz Systems. All rights reserved.</p>
            <div>
                <a href="https://facebook.com/genekenry.peralta" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-facebook-f fa-lg mx-2 social-icon" ></i>
                </a>
                <a href="https://x.com/cakenryy?s=21&t=ZAgXod7Md8fmNkKfD4wp8Q" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-twitter fa-lg mx-2 social-icon" ></i>
                </a>
                <a href="https://www.instagram.com/gk_enry" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram fa-lg mx-2 social-icon" ></i>
                </a>
            </div>
        </footer>
    );
};
export default Footer;