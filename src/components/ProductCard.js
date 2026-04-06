import React from 'react';

// 1. Define it FIRST
const ProductCard = ({ name, price, description, image, onAddToBag }) => {
    
    const handleWhatsAppOrder = () => {
        const phoneNumber = "9405371545";
        const message = `Hello BakeryBliss! 🧁 I would like to order: ${name}`;
        window.open(`https://api.whatsapp.org/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="card h-100 bakery-card shadow-sm border-0">
            <img src={image} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="card-text text-muted small">{description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold">₹{price}</span>
                    <div>
                        <button onClick={handleWhatsAppOrder} className="btn btn-outline-success btn-sm me-2">WhatsApp</button>
                        <button onClick={() => onAddToBag({ name, price, image })} className="btn btn-pista btn-sm rounded-pill">Add to Bag</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2. Export it LAST
export default ProductCard;