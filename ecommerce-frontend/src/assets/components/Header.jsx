import React from 'react';
import logo from '../assets/images/zkr.jpg';

const Header = () => {
    return (
        <header className="modern-header">
            <div className="d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <img 
                        src={logo} 
                        alt="ZKRA STORE Logo" 
                        className="logo-image mb-2" 
                        style={{ height: '60px', width: 'auto' }}
                    />
                    <h1 className="store-title">ZKRA STORE</h1>
                    <p className="store-subtitle">Your one-stop shop for all your needs</p>
                </div>
            </div>
        </header>
    );
};
export default Header;
