import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
// context folder lives at src/context
import { CartContext } from '../../context/CartContext';
const Navbar = () => {
    const { cart } = useContext(CartContext);
    const totalQty = cart.reduce((sum, item) => sum + (item.qty ?? 1), 0);

    return (
        <>
            {/* =============== DESKTOP NAVBAR ============================ */}
            <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block shadow-sm" style={{ backgroundColor: '#121212', borderBottom: '1px solid #c0c0c0' }}>
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/" style={{ color: '#e8e8e8' }}>
                        AETHERWORKZ SYSTEMS
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/policies"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Policies
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/cart"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    <i className="fas fa-shopping-cart"></i>
                                    {" "}
                                    Cart
                                    {totalQty > 0 && (
                                        <span className="badge ms-1" style={{ backgroundColor: '#c0c0c0', color: '#090909', fontWeight: 700 }}>
                                            {totalQty}
                                        </span>
                                    )}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* =============== MOBILE BOTTOM NAVIGATION ================= */}
            <nav className="navbar fixed-bottom border-top d-lg-none" style={{ backgroundColor: '#121212', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="container-fluid d-flex justify-content-around text-center">
                    {/* Home */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "text-silver-active text-decoration-none"
                                : "text-silver text-decoration-none"
                        }
                    >
                        <div>
                            <i className="fa fa-home fs-5"></i>
                            <div style={{ fontSize: "12px" }}>Home</div>
                        </div>
                    </NavLink>

                    {/* Products */}
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive
                                ? "text-silver-active text-decoration-none"
                                : "text-silver text-decoration-none"
                        }
                    >
                        <div>
                            <i className="fa fa-box fs-5"></i>
                            <div style={{ fontSize: "12px" }}>Products</div>
                        </div>
                    </NavLink>

                    {/* Cart */}
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            isActive
                                ? "text-silver-active text-decoration-none position-relative"
                                : "text-silver text-decoration-none position-relative"
                        }
                    >
                        <div className="position-relative">
                            <i className="fa fa-shopping-cart fs-5"></i>

                            {totalQty > 0 && (
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                                    style={{ fontSize: "10px", backgroundColor: '#c0c0c0', color: '#090909' }}
                                >
                                    {totalQty}
                                </span>
                            )}
                        </div>

                        <div style={{ fontSize: "12px" }}>Cart</div>
                    </NavLink>

                    {/* About */}
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-silver-active text-decoration-none"
                                : "text-silver text-decoration-none"
                        }
                    >
                        <div>
                            <i className="fa fa-info-circle fs-5"></i>
                            <div style={{ fontSize: "12px" }}>About</div>
                        </div>
                    </NavLink>

                    {/* Contact */}
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-silver-active text-decoration-none"
                                : "text-silver text-decoration-none"
                        }
                    >
                        <div>
                            <i className="fa fa-phone fs-5"></i>
                            <div style={{ fontSize: "12px" }}>Contact</div>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    );
};
export default Navbar;