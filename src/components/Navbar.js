import React, { useState } from 'react';

const Navbar = ({ cartItems, removeFromCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-lg-5 px-3 shadow-sm sticky-top">
            <div className="container-fluid">
                {/* Updated Brand Name: BakeBliss */}
                <a className="navbar-brand fw-bolder fs-3" href="#" style={{ letterSpacing: '-1.5px' }}>
                    <span style={{ color: '#2F4F4F' }}>Bake</span>
                    <span style={{ color: '#9DC183' }}>Bliss</span>
                </a>
                
                <div className="d-flex align-items-center">
                    <div className="position-relative">
                        <button 
                            className="btn border-0 d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                            style={{ backgroundColor: '#F4F9F1' }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="fw-bold small text-muted">BAG</span>
                            <span className="badge rounded-pill" style={{ backgroundColor: '#9DC183' }}>
                                {cartItems.length}
                            </span>
                        </button>
                        
                        {isOpen && (
                            <div className="mini-bag shadow-lg border-0 p-3" onClick={(e) => e.stopPropagation()}>
                                <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                                    <h6 className="fw-bold m-0">Your Sweet Cravings</h6>
                                    <span className="text-muted small">{cartItems.length} Items</span>
                                </div>

                                {cartItems.length === 0 ? (
                                    <div className="text-center py-4">
                                        <p className="text-muted small m-0">No treats yet! 🍰</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="cart-items-scroll" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                            {cartItems.map((item, index) => (
                                                <div key={index} className="d-flex align-items-center mb-3">
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.name} 
                                                        style={{ width: '55px', height: '55px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #f0f0f0' }} 
                                                    />
                                                    <div className="ms-3 flex-grow-1">
                                                        <div className="small fw-bold text-dark">{item.name}</div>
                                                        <div className="small text-success fw-semibold">₹{item.price}</div>
                                                    </div>
                                                    <button 
                                                        onClick={() => removeFromCart(index)} 
                                                        className="btn btn-sm btn-light rounded-circle text-danger ms-2"
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-top pt-3 mt-2">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="text-muted small fw-bold">Total:</span>
                                                <span className="fs-5 fw-bold text-dark">₹{subtotal}</span>
                                            </div>
                                            <button className="btn btn-pista w-100 py-2 rounded-pill shadow-sm">
                                                Order Now
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;