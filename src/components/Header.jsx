import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { totalQuantity } = useSelector(state => state.cart);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">Paradise Nursery</Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="cart-icon">
                  <FaShoppingCart />
                  {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
