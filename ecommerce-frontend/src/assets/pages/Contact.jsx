import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFeedback('Message sent successfully! Thank you for contacting us.');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setFeedback(''), 5000);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Contact Us</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>

                        <button type="submit" className="btn btn-success">
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
                        </button>

                        {feedback && (
                            <div className="alert alert-success mt-3" role="alert">
                                {feedback}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
