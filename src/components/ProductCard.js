import React from 'react';

const ProductCard = ({ name, price, description, image }) => {
    
    const handleWhatsAppOrder = () => {
        const phoneNumber = "9405371545";
        const message = `Hello BakeryBliss! 🧁 I would like to order:
*Name:* ${name}
*Price:* ₹${price}
*Details:* ${description}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.org/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="card h-100 bakery-card shadow-sm border-0">
            <img 
                src={image || "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500"} 
                className="card-img-top" 
                alt={name} 
                style={{ height: '220px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="card-text text-muted flex-grow-1">{description}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fs-5 fw-bold text-success">₹{price}</span>
                    <button 
                        onClick={handleWhatsAppOrder} 
                        className="btn btn-primary rounded-pill px-3"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;