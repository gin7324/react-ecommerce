import { useContext, useEffect } from 'react';
// context folder is outside of assets
import { CartContext } from '../../context/CartContext';
import { useRecentlyViewed } from '../../context/RecentlyViewedContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { addToRecentlyViewed } = useRecentlyViewed();

    // Add to recently viewed when component mounts (when product is viewed)
    useEffect(() => {
        addToRecentlyViewed(product);
    }, [product, addToRecentlyViewed]);

    return (
        <div className="card h-100 shadow-sm">
            <div className="product-img-wrapper">
                {product.discount && (
                    <div className="sale-badge">-{product.discount}%</div>
                )}
                <img src={product.image} className="card-img-top product-img" alt={product.name} />
            </div>

            <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.name}</h6>
                <div className="star-rating">
                    {[...Array(5)].map((star, index) => (
                        <i
                            key={index}
                            className={`fa-star ${index < product.rating ? 'fas' : 'far'}`}
                        ></i>
                    ))}
                </div>

                <div className="mb-2">
                    <span className="text-muted text-decoration-line-through me-2">
                        ${product.oldPrice}
                    </span>
                    <span className="fw-bold text-danger">
                        ${product.price}
                    </span>
                </div>

                <button
                    className="btn btn-primary mt-auto"
                    onClick={() => addToCart(product)}
                >
                    <i className="fas fa-shopping-cart me-2"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
export default ProductCard;




       
