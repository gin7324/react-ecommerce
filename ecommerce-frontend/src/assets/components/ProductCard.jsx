import { useContext, useEffect, memo } from 'react';
// context folder is outside of assets
import { CartContext } from '../../context/CartContext';
import { useRecentlyViewed } from '../../context/RecentlyViewedContext';

const ProductCard = memo(({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { addToRecentlyViewed } = useRecentlyViewed();

    // Add to recently viewed when component mounts (when product is viewed)
    useEffect(() => {
        addToRecentlyViewed(product);
    }, [product.id, addToRecentlyViewed]); // Only depend on product.id to prevent unnecessary re-renders

    return (
        <div className="product-card-wrapper">
            <div className="product-card h-100">
                <div className="product-img-container">
                    {product.discount && (
                        <div className="discount-badge">
                            <span className="discount-text">-{product.discount}%</span>
                        </div>
                    )}
                    <div className="wishlist-icon">
                        <i className="far fa-heart"></i>
                    </div>
                    <img src={product.image} className="product-image" alt={product.name} />
                    <div className="product-overlay">
                        <button
                            className="btn btn-add-cart"
                            onClick={() => addToCart(product)}
                        >
                            <i className="fas fa-shopping-cart me-2"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="product-info">
                    <h6 className="product-title">{product.name}</h6>

                    <div className="rating-section">
                        <div className="stars">
                            {[...Array(5)].map((star, index) => (
                                <i
                                    key={index}
                                    className={`fa-star ${index < product.rating ? 'fas' : 'far'}`}
                                ></i>
                            ))}
                        </div>
                        <span className="rating-text">({product.rating})</span>
                    </div>

                    <div className="price-section">
                        <span className="current-price">₱{product.price}</span>
                        {product.oldPrice && (
                            <span className="old-price">₱{product.oldPrice}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ProductCard;




       
