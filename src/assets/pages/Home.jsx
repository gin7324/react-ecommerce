
import ProductCard from "../components/ProductCard";
import BannerImg from "../assets/images/BannerTwo.jpg";
import MonitorImg from "../assets/images/TechyThree.jpg";
import KeyboardImg from "../assets/images/mechkey.jpg";
import GamingLapImg from "../assets/images/gaminglap.jpg";
import HeadphonesImg from "../assets/images/wirelessheadphones.jpg";

const produts = [
    {
        name: "Gaming Laptop",
        oldPrice: 2000,
        price: 1500,
        discount: 25,
        rating: 4,
        image: GamingLapImg
    },
    {
        name: "Wireless Headphones",
        oldPrice: 300,
        price: 150,
        discount: 50,
        rating: 5,
        image: HeadphonesImg
    }

];

const Home = () => {
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
            <h2 className="mb-4" style={{ color: '#e8e8e8', fontSize: '2em' }}>Featured Products ✨</h2>
            <div className="row">
                {produts.map((product, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

