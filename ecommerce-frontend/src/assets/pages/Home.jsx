
import ProductCard from "../components/ProductCard";
import RecentlyViewed from "../components/RecentlyViewed";
import BannerImg from "../assets/images/Desktop.jpg";
import SecondImg from "../assets/images/Jackets.jpg";
import ThirdImg from "../assets/images/rings.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://react-ecommerce-1-vu7x.onrender.com";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `${API_BASE_URL}/products`;
        console.log("Home fetching", url);
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                console.log("Home API Response:", data);
                // Transform fakestoreapi data and take first 4
                const formatted = data.slice(0, 4).map(item => ({
                    id: item.id,
                    name: item.title,
                    oldPrice: (item.price * 1.2).toFixed(2),
                    price: item.price,
                    discount: Math.round((item.price * 0.2) / item.price * 100),
                    rating: Math.round(item.rating?.rate || 0),
                    image: item.image
                }));
                setProducts(formatted);
            })
            .catch((err) => {
                console.error('Error fetching products in Home:', err);
                setProducts([]);
            });
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Discover Amazing Products at
                            <span className="highlight"> ZKRA Store</span>
                        </h1>
                        <p className="hero-subtitle">
                            Your one-stop destination for quality products at unbeatable prices.
                            From electronics to fashion, we have everything you need.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/products" className="btn btn-primary btn-lg">
                                <i className="fas fa-shopping-bag me-2"></i>
                                Shop Now
                            </Link>
                            <Link to="/about" className="btn btn-outline-light btn-lg">
                                <i className="fas fa-info-circle me-2"></i>
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Products</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Categories</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Separated Carousel Section */}
            <section className="carousel-section">
                <div className="container">
                    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={BannerImg} className="d-block w-100" alt="Premium Electronics" />
                                <div className="carousel-caption">
                                    <h3>Premium Electronics</h3>
                                    <p>Latest gadgets and tech accessories</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={SecondImg} className="d-block w-100" alt="Jackets" />
                                <div className="carousel-caption">
                                    <h3>Jackets</h3>
                                    <p>Stylish and comfortable jackets for all seasons</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={ThirdImg} className="d-block w-100" alt="rings" />
                                <div className="carousel-caption">
                                    <h3>Rings and Accessories</h3>
                                    <p>Elegant and unique rings and accessories for every occasion </p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Shop by Category</h2>
                        <p className="section-subtitle">Explore our wide range of product categories</p>
                    </div>
                    <div className="categories-grid">
                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-laptop"></i>
                            </div>
                            <h3>Electronics</h3>
                            <p>Laptops, phones, and gadgets</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-tshirt"></i>
                            </div>
                            <h3>Fashion</h3>
                            <p>Clothing and accessories</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <h3>Home & Living</h3>
                            <p>Furniture and decor</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-gamepad"></i>
                            </div>
                            <h3>Gaming</h3>
                            <p>Consoles and accessories</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="featured-products-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Products</h2>
                        <p className="section-subtitle">Handpicked products just for you</p>
                    </div>
                    <div className="products-grid">
                        {products.map((product, index) => (
                            <div key={index} className="product-item">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/products" className="btn btn-primary btn-lg">
                            <i className="fas fa-arrow-right me-2"></i>
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-shipping-fast"></i>
                            </div>
                            <h3>Free Shipping</h3>
                            <p>Free delivery on orders over ₱500</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Secure Payment</h3>
                            <p>100% secure payment processing</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-undo"></i>
                            </div>
                            <h3>Easy Returns</h3>
                            <p>30-day return policy</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3>24/7 Support</h3>
                            <p>Customer support anytime</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recently Viewed Section */}
            <section className="recently-viewed-section">
                <div className="container">
                    <RecentlyViewed />
                </div>
            </section>
        </div>
    );
};

export default Home;

