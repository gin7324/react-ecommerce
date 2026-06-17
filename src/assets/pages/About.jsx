const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-10">
                    <h2 className="mb-4" style={{ color: '#e8e8e8', fontSize: '2.2em' }}>About AetherWorkz Systems</h2>
                    
                    <div className="mb-4">
                        <h4 style={{ color: '#c0c0c0' }}>Our Mission</h4>
                        <p style={{ color: '#a9a9a9' }}>
                            At AetherWorkz Systems, we believe in elevating your tech experience with cutting-edge products and innovative solutions. Our mission is to provide high-quality, premium products that combine durability, style, and exceptional value, ensuring every customer gets the best without compromise.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 style={{ color: '#c0c0c0' }}>Our Commitment</h4>
                        <p style={{ color: '#a9a9a9' }}>
                            We are passionate about making cutting-edge and innovative tech solutions accessible to everyone. AetherWorkz is committed to quality, reliability, and continuously updating our catalog to reflect the latest trends and customer needs.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 style={{ color: '#c0c0c0' }}>Technology & Experience</h4>
                        <p style={{ color: '#a9a9a9' }}>
                            Our website is built using React, Vite, Bootstrap, and FontAwesome, ensuring a fast, responsive, and visually stunning shopping experience across all devices. Built for performance and designed for excellence.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 style={{ color: '#c0c0c0' }}>Our Core Values</h4>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <h5 style={{ color: '#e8e8e8' }}><i className="fas fa-bolt" style={{ color: '#c0c0c0', marginRight: '8px' }}></i>Performance First</h5>
                                <p style={{ color: '#a9a9a9' }}>We prioritize speed, reliability, and user satisfaction with seamless navigation and top-tier support.</p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <h5 style={{ color: '#e8e8e8' }}><i className="fas fa-gem" style={{ color: '#c0c0c0', marginRight: '8px' }}></i>Premium Quality</h5>
                                <p style={{ color: '#a9a9a9' }}>We source cutting-edge products that balance innovation with exceptional craftsmanship and fair pricing.</p>
                            </div>
                            <div className="col-md-6">
                                <h5 style={{ color: '#e8e8e8' }}><i className="fas fa-rocket" style={{ color: '#c0c0c0', marginRight: '8px' }}></i>Innovation Driven</h5>
                                <p style={{ color: '#a9a9a9' }}>By leveraging modern web technologies, we deliver a seamless and stunning online experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
