import React, { memo } from 'react';
import { useRecentlyViewed } from '../../context/RecentlyViewedContext';
import ProductCard from './ProductCard';

const RecentlyViewed = memo(() => {
    const { recentlyViewed } = useRecentlyViewed();

    if (recentlyViewed.length === 0) {
        return null;
    }

    return (
        <div className="recently-viewed-section mb-5">
            <h3 className="section-title mb-4">Recently Viewed</h3>
            <div className="recently-viewed-container">
                <div className="recently-viewed-grid">
                    {recentlyViewed.map((product) => (
                        <div key={product.id} className="recently-viewed-item">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default RecentlyViewed;