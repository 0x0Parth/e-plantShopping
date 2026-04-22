import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; 

function ProductList() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "img_url", cost: 15 },
                { name: "Spider Plant", image: "img_url", cost: 12 },
                { name: "Peace Lily", image: "img_url", cost: 18 },
                { name: "Aloe Vera", image: "img_url", cost: 10 },
                { name: "Rubber Plant", image: "img_url", cost: 20 },
                { name: "Bamboo Palm", image: "img_url", cost: 25 }
            ]
        },
        {
            category: "Low Maintenance",
            plants: [
                { name: "ZZ Plant", image: "img_url", cost: 22 },
                { name: "Pothos", image: "img_url", cost: 10 },
                { name: "Cast Iron Plant", image: "img_url", cost: 28 },
                { name: "Jade Plant", image: "img_url", cost: 15 },
                { name: "Succulent Mix", image: "img_url", cost: 12 },
                { name: "Philodendron", image: "img_url", cost: 14 }
            ]
        },
        {
            category: "Fragrant",
            plants: [
                { name: "Jasmine", image: "img_url", cost: 18 },
                { name: "Lavender", image: "img_url", cost: 15 },
                { name: "Rosemary", image: "img_url", cost: 12 },
                { name: "Mint", image: "img_url", cost: 8 },
                { name: "Lemon Balm", image: "img_url", cost: 10 },
                { name: "Hyacinth", image: "img_url", cost: 22 }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const isAdded = (name) => cart.some(item => item.name === name);

    return (
        <div>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="#">Plants</a>
                <a href="#">Cart ({totalItems})</a>
            </nav>
            <div className="product-grid">
                {plantsArray.map(section => (
                    <div key={section.category}>
                        <h2>{section.category}</h2>
                        <div className="plants">
                            {section.plants.map(plant => (
                                <div key={plant.name} className="plant-card">
                                    <img src={plant.image} alt={plant.name} />
                                    p{plant.name} - ${plant.cost}
                                    <button 
                                        disabled={isAdded(plant.name)}
                                        onClick={() => handleAddToCart(plant)}
                                    >
                                        {isAdded(plant.name) ? "Added" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductList;
