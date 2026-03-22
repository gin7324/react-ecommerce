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
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">
                        ZKRA - ALL GOODS IN ONE PLACE
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
                                        <span className="badge bg-secondary ms-1">
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
            <nav className="navbar fixed-bottom bg-light border-top d-lg-none shadow-lg">
                <div className="container-fluid d-flex justify-content-around text-center">
                    {/* Home */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary text-decoration-none"
                                : "text-dark text-decoration-none"
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
                                ? "text-primary text-decoration-none"
                                : "text-dark text-decoration-none"
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
                                ? "text-primary text-decoration-none position-relative"
                                : "text-dark text-decoration-none position-relative"
                        }
                    >
                        <div className="position-relative">
                            <i className="fa fa-shopping-cart fs-5"></i>

                            {totalQty > 0 && (
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    style={{ fontSize: "10px" }}
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
                                ? "text-primary text-decoration-none"
                                : "text-dark text-decoration-none"
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
                                ? "text-primary text-decoration-none"
                                : "text-dark text-decoration-none"
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