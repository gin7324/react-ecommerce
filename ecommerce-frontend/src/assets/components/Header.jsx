import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header className="modern-header" style={{ backgroundColor: '#0a0a0a', borderBottom: '2px solid #c0c0c0' }}>
            <div className="d-flex justify-content-center align-items-center py-4">
                <div className="text-center">
                    <img 
                        src={logo} 
                        alt="AetherWorkz Logo" 
                        className="logo-image mb-2" 
                    />
                    <h1 className="store-title">AETHERWORKZ</h1>
                    <p className="store-subtitle">Elevate your tech experience with premium innovation</p>
                </div>
            </div>
        </header>
    );
};
export default Header;
