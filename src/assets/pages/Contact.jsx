const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 style={{ color: '#e8e8e8' }}>Contact Us</h2>

                    <form>
                        <div className="mb-3">
                            <label className="form-label" style={{ color: '#c0c0c0' }}>Name</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" style={{ color: '#c0c0c0' }}>Email</label>
                            <input type="email" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" style={{ color: '#c0c0c0' }}>Message</label>
                            <textarea className="form-control"></textarea>
                        </div>

                        <button className="btn" style={{ backgroundColor: '#c0c0c0', borderColor: '#c0c0c0', color: '#0a0a0a', fontWeight: 'bold' }}>
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Contact;
