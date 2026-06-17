const Footer = () => {
    return (
        <footer className="bg-dark text-white p-3 text-center" style={{ backgroundColor: '#0a0a0a', borderTop: '2px solid #c0c0c0' }}>
            <p style={{ color: '#a9a9a9' }}>&copy; 2024-2025 AetherWorkz Systems. All rights reserved.</p>
            <div>
                <i className="fab fa-facebook-f fa-lg mx-2" ></i>
                <i className="fab fa-twitter fa-lg mx-2" ></i>
                <i className="fab fa-instagram fa-lg mx-2" ></i>
            </div>
        </footer>
    );
};
export default Footer;