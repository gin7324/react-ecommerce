
import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

const defaultProducts = [
    {
        id: 1,
        name: "Running Shoes",
        price: 1200,
        oldPrice: 1500,
        rating: 4,
        discount: 20
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 800,
        oldPrice: 1000,
        rating: 5,
        discount: 20
    },
    {
        id: 3,
        name: "Wireless Earbuds",
        price: 150,
        oldPrice: 200,
        rating: 4,
        discount: 25
    },
    {
        id: 4,
        name: "Gaming Laptop",
        price: 18500,
        oldPrice: 20000,
        rating: 4,
        discount: 25
    },
    {
        id: 5,
        name: "Laptop Bag",
        price: 500,
        oldPrice: 700,
        rating: 4,
        discount: 30
    }
];

const ProductList = () => {
    const [apiProducts, setApiProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    //fetch products when component loads
    useEffect(() => {
        fetch("https://react-ecommerce-api.onrender.com/api/products")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setApiProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching from backend API:", err);
                console.log("Falling back to default products");
                setApiProducts(defaultProducts);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="container"><p>Loading products...</p></div>;
    }

    // Use fetched products or fallback to default
    const displayProducts = apiProducts.length > 0 ? apiProducts : defaultProducts;

    return (
        <div className="container">
            <div className="row">
                {/* Sidebar */}
                <div className="col-lg-2 col-md-3 mb-4">
                    <Sidebar />
                </div>

                {/* Products */}
                <div className="col-lg-10 col-md-9">
                    <h2 className="mb-3">All Products</h2>

                    <div className="row">
                        {displayProducts.map((product) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
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
