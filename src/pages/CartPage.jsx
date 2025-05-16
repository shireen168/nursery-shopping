import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeItem } from '../redux/CartSlice';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleUpdateQuantity = (id, type) => {
    dispatch(updateQuantity({ id, type }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Our checkout system is under development.');
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Your Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p>Total Items: <span>{totalQuantity}</span></p>
              <p>Total Cost: <span>${totalAmount.toFixed(2)}</span></p>
            </div>
            
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-price">Unit Price: ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleUpdateQuantity(item.id, 'decrease')}
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => handleUpdateQuantity(item.id, 'increase')}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="item-subtotal">
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="item-remove">
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
