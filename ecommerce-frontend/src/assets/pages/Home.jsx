
import ProductCard from "../components/ProductCard";
import BannerImg from "../assets/images/Banner.jpg";
import MonitorImg from "../assets/images/4k monitor.jpg";
import KeyboardImg from "../assets/images/mechkey.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const API_BASE_URL = import.meta.env.VITE_API_URL || "https://fakestoreapi.com";

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
        <div className="container">
            {/* Carousel Banner Section */}
            <div id="bannerCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={BannerImg} className="d-block w-100" alt="Banner 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={MonitorImg} className="d-block w-100" alt="Banner 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={KeyboardImg} className="d-block w-100" alt="Banner 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Featured Products */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Featured Products</h2>
                {/* Link to full ProductList page */}
                <Link to="/products" className="btn btn-outline-primary">
                    View More Products
                </Link>
            </div>
            <div className="row">
                {products.map((product, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

