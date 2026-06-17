const ProductCard = ({ product }) => {
    return (
        <div className="card h-100 shadow-sm" style={{ backgroundColor: '#1a1a1a', border: '1px solid #c0c0c0', borderRadius: '8px' }}>
            <div className="product-img-wrapper">
                {product.discount && (
                    <div className="sale-badge">-{product.discount}%</div>
                )}
                <img src={product.image} className="card-img-top product-img" alt={product.name} />
            </div>

            <div className="card-body d-flex flex-column">
                <h6 className="card-title" style={{ color: '#e8e8e8' }}>{product.name}</h6>
                <div className="star-rating">
                    {[...Array(5)].map((star, index) => (
                        <i
                            key={index}
                            className={`fa-star ${index < product.rating ? 'fas' : 'far'}`}
                            style={{ color: '#c0c0c0' }}
                        ></i>
                    ))}
                </div>

                <div className="mb-2">
                    <span className="text-muted text-decoration-line-through me-2" style={{ color: '#a9a9a9' }}>
                        ${product.oldPrice}
                    </span>
                    <span className="fw-bold" style={{ color: '#c0c0c0', fontSize: '1.2em' }}>
                        ${product.price}
                    </span>
                </div>

                <button className="btn btn-primary mt-auto" style={{ backgroundColor: '#c0c0c0', borderColor: '#c0c0c0', color: '#0a0a0a', fontWeight: 'bold' }}>
                    <i className="fas fa-shopping-cart me-2"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
export default ProductCard;




       
