import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import plants from '../data/plants';
import './ProductsPage.css';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  
  // Group plants by category
  const categories = [...new Set(plants.map(plant => plant.category))];
  
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };
  
  const isInCart = (id) => {
    return items.some(item => item.id === id);
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Plants</h1>
        
        {categories.map(category => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            <div className="products-grid">
              {plants
                .filter(plant => plant.category === category)
                .map(plant => (
                  <div key={plant.id} className="product-card">
                    <div className="product-image">
                      <img src={plant.image} alt={plant.name} />
                    </div>
                    <div className="product-info">
                      <h3>{plant.name}</h3>
                      <p className="product-price">${plant.price.toFixed(2)}</p>
                      <p className="product-description">{plant.description}</p>
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
