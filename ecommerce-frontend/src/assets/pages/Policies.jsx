const Policies = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="mb-4">Policies & Terms & Conditions</h1>

                    {/* Return Policy */}
                    <section className="mb-5">
                        <h2 className="mb-3">Return Policy</h2>
                        <p>
                            We want you to be completely satisfied with your purchase. If you're not happy with your product,
                            you can return it within 30 days of purchase for a full refund or exchange.
                        </p>
                        <ul>
                            <li>Items must be unused and in original packaging</li>
                            <li>Return shipping is free for defective items</li>
                            <li>Refunds are processed within 5-7 business days</li>
                        </ul>
                    </section>

                    {/* Shipping Policy */}
                    <section className="mb-5">
                        <h2 className="mb-3">Shipping Policy</h2>
                        <p>
                            We offer fast and reliable shipping options to all customers.
                        </p>
                        <ul>
                            <li>Standard Shipping: 5-7 business days</li>
                            <li>Express Shipping: 2-3 business days</li>
                            <li>Free shipping on orders over $50</li>
                            <li>Tracking information provided for all shipments</li>
                        </ul>
                    </section>

                    {/* Payment Policy */}
                    <section className="mb-5">
                        <h2 className="mb-3">Payment Policy</h2>
                        <p>
                            We accept various payment methods for your convenience.
                        </p>
                        <ul>
                            <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                            <li>PayPal</li>
                            <li>Bank Transfer</li>
                            <li>Digital Wallets (Apple Pay, Google Pay)</li>
                        </ul>
                    </section>

                    {/* Privacy Policy */}
                    <section className="mb-5">
                        <h2 className="mb-3">Privacy Policy</h2>
                        <p>
                            Your privacy is important to us. We collect and use your personal information only to provide better service.
                        </p>
                        <ul>
                            <li>We do not sell your personal information to third parties</li>
                            <li>Your data is encrypted and stored securely</li>
                            <li>You can request your data at any time</li>
                            <li>We comply with GDPR and privacy regulations</li>
                        </ul>
                    </section>

                    {/* Terms of Service */}
                    <section className="mb-5">
                        <h2 className="mb-3">Terms of Service</h2>
                        <p>
                            By using our website, you agree to the following terms:
                        </p>
                        <ul>
                            <li>You must be at least 18 years old to make a purchase</li>
                            <li>All product descriptions are accurate to the best of our knowledge</li>
                            <li>We reserve the right to refuse or cancel any order</li>
                            <li>Prices are subject to change without notice</li>
                            <li>Users are responsible for maintaining account security</li>
                        </ul>
                    </section>

                    {/* Warranty */}
                    <section className="mb-5">
                        <h2 className="mb-3">Warranty</h2>
                        <p>
                            Most products come with a manufacturer's warranty. Please check individual product pages for warranty details.
                        </p>
                        <ul>
                            <li>Standard warranty: 1 year from purchase date</li>
                            <li>Extended warranty available for selected items</li>
                            <li>Warranty covers manufacturing defects only</li>
                            <li>Damage from misuse is not covered</li>
                        </ul>
                    </section>

                    {/* Contact */}
                    <section className="mb-5">
                        <h2 className="mb-3">Questions?</h2>
                        <p>
                            If you have any questions about our policies, please <strong>contact us</strong> or reach out to our customer support team.
                        </p>
                    </section>

                    <hr className="my-5" />
                    <p className="text-muted">
                        <small>Last updated: February 2026. These policies are subject to change at any time.</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Policies;
