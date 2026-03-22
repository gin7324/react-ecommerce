import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 skeleton-card">
                <div className="card-img-top skeleton skeleton-image"></div>
                <div className="card-body">
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text skeleton-short"></div>
                    <div className="skeleton skeleton-button"></div>
                </div>
            </div>
        </div>
    );
};

const SkeletonLoading = ({ count = 8 }) => {
    return (
        <>
            {Array.from({ length: count }, (_, index) => (
                <SkeletonCard key={index} />
            ))}
        </>
    );
};

export default SkeletonLoading;