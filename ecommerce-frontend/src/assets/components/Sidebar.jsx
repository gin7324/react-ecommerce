import { useEffect, useState } from 'react';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_BASE_URL = import.meta.env.VITE_API_URL || "https://react-ecommerce-1-vu7x.onrender.com";

    useEffect(() => {
        // Fetch categories from backend API
        fetch(`${API_BASE_URL}/products/categories`)
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
    }, []);

    return (
        <aside className="bg-light p-3">
            <h2>Categories</h2>
            <ul className="list-group">
                {loading ? (
                    <li className="list-group-item">Loading categories...</li>
                ) : categories.length > 0 ? (
                    categories.map((category) => (
                        <li key={category} className="list-group-item">
                            {category}
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">No categories available</li>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;