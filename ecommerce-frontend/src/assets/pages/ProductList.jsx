
import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import SkeletonLoading from "../components/SkeletonLoading";

const defaultProducts = [
    {
        id: 1,
        name: "Running Shoes",
        price: 1200,
        oldPrice: 1500,
        rating: 4,
        discount: 20,
        category: "Clothing"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 800,
        oldPrice: 1000,
        rating: 5,
        discount: 20,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Wireless Earbuds",
        price: 150,
        oldPrice: 200,
        rating: 4,
        discount: 25,
        category: "Electronics"
    },
    {
        id: 4,
        name: "Gaming Laptop",
        price: 18500,
        oldPrice: 20000,
        rating: 4,
        discount: 25,
        category: "Electronics"
    },
    {
        id: 5,
        name: "Laptop Bag",
        price: 500,
        oldPrice: 700,
        rating: 4,
        discount: 30,
        category: "Accessories"
    }
];

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://react-ecommerce-1-vu7x.onrender.com";

const ProductList = () => {
    const [apiProducts, setApiProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    
    // Search, Filter, Sort states
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortBy, setSortBy] = useState("");
    
    //fetch products when component loads
    useEffect(() => {
        const url = `${API_BASE_URL}/api/products`;
        console.log("ProductList fetching", url);
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setApiProducts(data.map(item => ({
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    oldPrice: (item.price * 1.2).toFixed(2),
                    rating: Math.round(item.rating?.rate || 0),
                    discount: Math.round((item.price * 0.2) / item.price * 100),
                    image: item.image,
                    category: item.category
                })));
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching from backend API:", err);
                console.log("Falling back to default products");
                setApiProducts(defaultProducts);
                setLoading(false);
            });
    }, []);

    // Fetch categories
    useEffect(() => {
        fetch(`${API_BASE_URL}/api/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Error fetching categories:", err));
    }, []);

    // Filter and sort products
    const filteredAndSortedProducts = apiProducts
        .filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
            const matchesMinPrice = minPrice === "" || product.price >= parseFloat(minPrice);
            const matchesMaxPrice = maxPrice === "" || product.price <= parseFloat(maxPrice);
            return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "price-low":
                    return a.price - b.price;
                case "price-high":
                    return b.price - a.price;
                case "name":
                    return a.name.localeCompare(b.name);
                case "rating":
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });

    if (loading) {
        return (
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-2 col-md-3 mb-4">
                        <Sidebar />
                    </div>
                    {/* Products Skeleton */}
                    <div className="col-lg-10 col-md-9">
                        <h2 className="mb-3">All Products</h2>
                        <div className="row">
                            <SkeletonLoading />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Use filtered and sorted products or fallback to default
    const displayProducts = filteredAndSortedProducts.length > 0 ? filteredAndSortedProducts : defaultProducts;

    return (
        <div className="container">
            <div className="row">
                {/* Sidebar */}
                <div className="col-lg-2 col-md-3 mb-4">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="col-lg-10 col-md-9">
                    {/* Search, Filter, Sort Controls */}
                    <div className="mb-4">
                        <div className="row g-3">
                            {/* Search */}
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            
                            {/* Category Filter */}
                            <div className="col-md-2">
                                <select
                                    className="form-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="">All Categories</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            
                            {/* Price Range */}
                            <div className="col-md-2">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Min Price"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                />
                            </div>
                            <div className="col-md-2">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Max Price"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                />
                            </div>
                            
                            {/* Sort */}
                            <div className="col-md-2">
                                <select
                                    className="form-select"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="">Sort By</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="name">Name</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <h2 className="mb-3">All Products ({displayProducts.length})</h2>

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
