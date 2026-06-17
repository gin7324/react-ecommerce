import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import GamingLapImg from "../assets/images/gaminglap.jpg";
import HeadphonesImg from "../assets/images/wirelessheadphones.jpg";
import MonitorImg from "../assets/images/4k monitor.jpg";
import KeyboardImg from "../assets/images/mechkey.jpg";
import USBHubImg from "../assets/images/usbhub.jpg";
import MouseImg from "../assets/images/wirelessmouse.jpg";
import WebcamImg from "../assets/images/webcam.jpg";

const products = [
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
    },
    {
        name: "4K Monitor",
        oldPrice: 800,
        price: 599,
        discount: 25,
        rating: 4,
        image: MonitorImg
    },
    {
        name: "Mechanical Keyboard",
        oldPrice: 150,
        price: 99,
        discount: 34,
        rating: 5,
        image: KeyboardImg
    },
    {
        name: "USB-C Hub",
        oldPrice: 80,
        price: 49,
        discount: 39,
        rating: 4,
        image: USBHubImg
    },
    {
        name: "Wireless Mouse",
        oldPrice: 60,
        price: 35,
        discount: 42,
        rating: 5,
        image: MouseImg
    },
    {
        name: "Webcam HD 1080p",
        oldPrice: 120,
        price: 75,
        discount: 37,
        rating: 4,
        image: WebcamImg
    },
];

const ProductList = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Sidebar */}
                <div className="col-lg-2 col-md-3 mb-4">
                    <Sidebar />
                </div>

                {/* Products */}
                <div className="col-lg-10 col-md-9">
                    <h2 className="mb-3" style={{ color: '#e8e8e8' }}>All Products</h2>

                    <div className="row">
                        {products.map((product, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={[index]}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
