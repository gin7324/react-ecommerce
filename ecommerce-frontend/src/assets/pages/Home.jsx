
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
                // Transform fakestoreapi data and take first 2
                const formatted = data.slice(0, 2).map(item => ({
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
            <section className="hero-section">
                <div className="hero-inner container">
                    <div className="hero-copy">
                        <span className="eyebrow">Enterprise digital commerce</span>
                        <h1 className="hero-title">AetherWorkz Systems: Bespoke Retail Experiences for Modern Teams</h1>
                        <p className="hero-text">
                            We create polished B2B storefronts with premium black-and-silver aesthetics,
                            seamless navigation, and conversion-led messaging built for fast, accessible growth.
                        </p>
                        <div className="hero-actions">
                            <Link to="/products" className="btn btn-primary btn-lg">
                                Explore Products
                            </Link>
                            <Link to="/about" className="btn btn-outline-light btn-lg">
                                Learn About Us
                            </Link>
                        </div>
                    </div>

                    <div className="hero-panel">
                        <div className="hero-stat">
                            <span>38+</span>
                            <p>High-value products</p>
                        </div>
                        <div className="hero-stat">
                            <span>99.9%</span>
                            <p>Uptime for customer sites</p>
                        </div>
                        <div className="hero-stat">
                            <span>24/7</span>
                            <p>Dedicated client support</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overview-section section-surface">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-copy">
                            <span className="eyebrow">Company overview</span>
                            <h2>We help brands convert professional audiences with confident digital experiences.</h2>
                            <p>
                                AetherWorkz Systems combines premium visual design, reliable engineering, and strategic user journeys to help growing businesses make every digital interaction feel polished, professional, and effortless.
                            </p>
                        </div>
                        <div className="overview-cards">
                            <div className="glass-card">
                                <h3>Discovery & strategy</h3>
                                <p>Align product goals, customer needs, and revenue paths in a focused go-to-market plan.</p>
                            </div>
                            <div className="glass-card">
                                <h3>Design systems</h3>
                                <p>Create reusable UI patterns and brand-consistent interfaces for every channel.</p>
                            </div>
                            <div className="glass-card">
                                <h3>Platform delivery</h3>
                                <p>Build secure, scalable commerce experiences optimized for speed and conversions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    <div className="section-heading">
                        <span className="eyebrow" color="#171717">Service offerings</span>
                        <h2 color="#716f6f">Services designed for modern retail teams and enterprise buyers.</h2>
                    </div>
                    <div className="services-grid">
                        <article className="service-card glass-panel">
                            <h3 color="#171717">Product Strategy</h3>
                            <p color="#716f6f">Prioritize product features, clarify customer journeys, and launch with confidence.</p>
                        </article>
                        <article className="service-card glass-panel">
                            <h3 color="#171717">Experience Design</h3>
                            <p color="#716f6f">Deliver intuitive interfaces with accessible interactions and branded motion.</p>
                        </article>
                        <article className="service-card glass-panel">
                            <h3 color="#171717">Engineering & Launch</h3>
                            <p color="#716f6f">Deploy resilient storefronts with fast load times and predictable performance.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="portfolio-section section-surface">
                <div className="container">
                    <div className="section-heading">
                        <span className="eyebrow" color="#171717">Portfolio</span>
                        <h2 color="#716f6f">Recent work that showcases our design and delivery craft.</h2>
                    </div>
                    <div className="portfolio-grid">
                        <article className="portfolio-card">
                            <img src={BannerImg} alt="Axis Commerce" />
                            <div>
                                <h3 color="#171717">Axis Commerce</h3>
                                <p color="#716f6f">Streamlined B2B ecommerce platform with a conversion-first checkout experience.</p>
                            </div>
                        </article>
                        <article className="portfolio-card">
                            <img src={SecondImg} alt="Luxe Apparel" />
                            <div>
                                <h3 color="#171717">Luxe Apparel</h3>
                                <p color="#716f6f">Developed a premium retail site with advanced product discovery and storytelling.</p>
                            </div>
                        </article>
                        <article className="portfolio-card">
                            <img src={ThirdImg} alt="Elemental Goods" />
                            <div>
                                <h3 color="#171717">Elemental Goods</h3>
                                <p color="#716f6f">Created a polished digital storefront for a luxury accessories brand.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <span className="eyebrow" color="#171717">Client testimonials</span>
                        <h2 color="#716f6f">Trusted by clients who expect premium delivery.</h2>
                    </div>
                    <div className="testimonials-grid">
                        <blockquote className="testimonial-card glass-panel">
                            <p color="#040404">“AetherWorkz transformed our product launch with a modern, enterprise-ready storefront that elevated our brand and improved lead quality。”</p>
                            <footer color="#424141">— Jaime Patel, VP Marketing</footer>
                        </blockquote>
                        <blockquote className="testimonial-card glass-panel">
                            <p color="#040404">“Their design and execution felt meticulously modern. The result was a fast, elegant site that immediately improved buyer confidence.”</p>
                            <footer color="#424141">— Nia Hughes, Head of Product</footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container cta-panel glass-panel">
                    <div>
                        <span className="eyebrow" color="#171717">Ready to get started?</span>
                        <h2 color="#716f6f">Let’s build a premium digital experience for your audience.</h2>
                    </div>
                    <Link to="/contact" className="btn btn-primary btn-xl">
                        Schedule a consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

