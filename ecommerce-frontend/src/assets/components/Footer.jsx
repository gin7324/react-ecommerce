const Footer = () => {
    return (
        <footer className="footer-custom text-center p-4">
            <p className="mb-2">&copy; 2026 zKr. All rights reserved.</p>
            <div>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-facebook-f fa-lg mx-2 social-icon" ></i>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-twitter fa-lg mx-2 social-icon" ></i>
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram fa-lg mx-2 social-icon" ></i>
                </a>
            </div>
        </footer>
    );
};
export default Footer;