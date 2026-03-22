import { useTheme } from '../../context/ThemeContext';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header className="bg-dark text-white p-3 text-center custom-header">
            <div className="d-flex justify-content-between align-items-center">
                <div></div> {/* Spacer */}
                <div>
                    <h1 className="store-title">ZKRA STORE</h1>
                    <p className="store-subtitle">Find the best products here!</p>
                </div>
                <button 
                    className="btn btn-outline-light"
                    onClick={toggleTheme}
                    title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    );
};
export default Header;
