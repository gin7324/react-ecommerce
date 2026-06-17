const Sidebar = () => {
    return (
        <aside className="p-3" style={{ backgroundColor: '#1a1a1a', border: '1px solid #c0c0c0', borderRadius: '8px' }}>
            <h2 style={{ color: '#e8e8e8', fontSize: '1.5em' }}>Categories</h2>
            <ul className="list-group" style={{ backgroundColor: 'transparent' }}>
                <li className="list-group-item" style={{ backgroundColor: '#2d2d2d', border: '1px solid #c0c0c0', color: '#e8e8e8' }}>Electronics</li>
                <li className="list-group-item" style={{ backgroundColor: '#2d2d2d', border: '1px solid #c0c0c0', color: '#e8e8e8' }}>Fashion</li>
                <li className="list-group-item" style={{ backgroundColor: '#2d2d2d', border: '1px solid #c0c0c0', color: '#e8e8e8' }}>Home & Garden</li>
                <li className="list-group-item" style={{ backgroundColor: '#2d2d2d', border: '1px solid #c0c0c0', color: '#e8e8e8' }}>Sports</li>
            </ul>
        </aside>
    );
};
export default Sidebar;