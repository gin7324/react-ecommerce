import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RecentlyViewedContext = createContext();

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);

export const RecentlyViewedProvider = ({ children }) => {
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    // Load from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('recentlyViewed');
        if (stored) {
            try {
                setRecentlyViewed(JSON.parse(stored));
            } catch (error) {
                console.error('Error parsing recently viewed from localStorage:', error);
            }
        }
    }, []);

    // Save to localStorage whenever recentlyViewed changes
    useEffect(() => {
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }, [recentlyViewed]);

    const addToRecentlyViewed = useCallback((product) => {
        setRecentlyViewed(prev => {
            // Check if this product is already the most recent
            if (prev.length > 0 && prev[0].id === product.id) {
                return prev; // No change needed
            }
            // Remove if already exists
            const filtered = prev.filter(item => item.id !== product.id);
            // Add to beginning and limit to 10 items
            return [product, ...filtered].slice(0, 10);
        });
    }, []);

    const clearRecentlyViewed = useCallback(() => {
        setRecentlyViewed([]);
    }, []);

    return (
        <RecentlyViewedContext.Provider value={{
            recentlyViewed,
            addToRecentlyViewed,
            clearRecentlyViewed
        }}>
            {children}
        </RecentlyViewedContext.Provider>
    );
};