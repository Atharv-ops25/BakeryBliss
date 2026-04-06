import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  // 1. Main Menu Data (Cakes & Ice Creams)
  const menuProducts = [
    { 
      id: 1,
      name: "Pista Royal Cake", 
      price: 850, 
      description: "Creamy pistachio layers with white chocolate shavings.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500" 
    },
    { 
      id: 2,
      name: "BakeBliss Special Ice Cream", 
      price: 250, 
      description: "Hand-churned pista and roasted almond fusion.",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=500" 
    },
    { 
      id: 3,
      name: "Velvet Cupcake", 
      price: 120, 
      description: "Soft sponge topped with Pista-infused frosting.",
      image: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?q=80&w=500" 
    }
  ];

  // 2. Cart State (Starts Empty)
  const [cart, setCart] = useState([]);

  const addToBag = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="app-wrapper">
      <Navbar cartItems={cart} removeFromCart={removeFromCart} />
      
      <header className="hero-section text-center py-5">
        <h1 className="display-4 fw-bold">Bake<span style={{color: '#9DC183'}}>Bliss</span> Menu</h1>
        <p className="text-muted">Explore our signature cakes and ice creams</p>
      </header>

      <main className="container mb-5">
        <div className="row g-4">
          {menuProducts.map((product) => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <ProductCard 
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                onAddToBag={addToBag} // This sends it to the cart!
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;