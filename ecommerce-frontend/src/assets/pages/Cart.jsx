import { useContext } from 'react';
// context is located two levels up (src/context)
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="container">
                <h2>Your Cart</h2>
                <p>Your shopping cart is currently empty.</p>
            </div>
        );
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="container">
            <h2>Your Cart</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-outline-secondary me-1"
                                    onClick={() => decreaseQty(item.id)}
                                >
                                    -
                                </button>
                                {item.qty}
                                <button
                                    className="btn btn-sm btn-outline-secondary ms-1"
                                    onClick={() => increaseQty(item.id)}
                                >
                                    +
                                </button>
                            </td>
                            <td>${(item.price * item.qty).toFixed(2)}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3 className="text-end">Total: ${total.toFixed(2)}</h3>
            <div className="text-end">
                <Link to="/checkout" className="btn btn-primary">
                    Proceed to Checkout
                </Link>
            </div>
        </div>
        
    );

};

export default Cart;
