import { useEffect, useState } from 'react';

const Sidebar = ({ selectedCategory, onCategoryChange, categories: propCategories }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_BASE_URL = import.meta.env.VITE_API_URL || "https://react-ecommerce-1-vu7x.onrender.com";

    useEffect(() => {
        // If categories are passed as props, use them
        if (propCategories && propCategories.length > 0) {
            setCategories(propCategories);
            setLoading(false);
            return;
        }

        // Otherwise fetch categories from backend API
        fetch(`${API_BASE_URL}/api/categories`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching categories:', err);
                setCategories([]);
                setLoading(false);
            });
    }, [propCategories]);

    const handleCategoryClick = (category) => {
        if (onCategoryChange) {
            onCategoryChange(category === selectedCategory ? "" : category);
        }
    };

    return (
        <aside className="bg-light p-3">
            <h2>Categories</h2>
            <ul className="list-group">
                {loading ? (
                    <li className="list-group-item">Loading categories...</li>
                ) : (
                    <>
                        <li
                            className={`list-group-item ${selectedCategory === "" ? "active" : ""}`}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleCategoryClick("")}
                        >
                            All Categories
                        </li>
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <li
                                    key={category}
                                    className={`list-group-item ${selectedCategory === category ? "active" : ""}`}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item text-muted">No categories available</li>
                        )}
                    </>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;