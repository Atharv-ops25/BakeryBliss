import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  // Mocking initial items so the cart looks "Full" for your UI check
  const [cart, setCart] = useState([
    { 
      name: "Pista Belgian Cake", 
      price: 950, 
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=200" 
    },
    { 
      name: "Mint Choco Ice Cream", 
      price: 180, 
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=200" 
    },
    { 
      name: "Vanilla Bean Sundae", 
      price: 220, 
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200" 
    }
  ]);

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const addToBag = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app-wrapper">
      <Navbar cartItems={cart} removeFromCart={removeFromCart} />
      
      <div className="container mt-5">
        <h2 className="fw-bold mb-4">Today's <span style={{color: '#9DC183'}}>BakeBliss</span> Specials</h2>
        <div className="row g-4">
            {/* Products go here */}
        </div>
      </div>
    </div>
  );
}

export default App;