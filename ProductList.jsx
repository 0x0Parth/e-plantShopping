import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2014/12/10/11/18/peace-lily-562873_1280.jpg", cost: "$18" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283036_1280.jpg", cost: "$10" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", cost: "$20" },
                { name: "Bamboo Palm", image: "https://cdn.pixabay.com/photo/2014/11/10/19/27/palm-tree-525867_1280.jpg", cost: "$25" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1506174031589-ad66d3cf2702", cost: "$20" },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b", cost: "$18" },
                { name: "Rosemary", image: "https://images.unsplash.com/photo-1592178142357-08d47b45ca35", cost: "$15" },
                { name: "Mint", image: "https://images.unsplash.com/photo-1585059895524-72359e061381", cost: "$12" },
                { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1574692039472-3ad3d0c94932", cost: "$14" },
                { name: "Hyacinth", image: "https://images.unsplash.com/photo-1590833109133-b998a961968d", cost: "$22" }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361", cost: "$25" },
                { name: "Pothos", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d", cost: "$10" },
                { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1616048056310-74697396717a", cost: "$30" },
                { name: "Jade Plant", image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e", cost: "$15" },
                { name: "Succulent", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e5f", cost: "$12" },
                { name: "Philodendron", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b", cost: "$18" }
            ]
        }
    ];

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div className="product-list-container">
            <nav className="navbar">
                <div className="navbar-links">
                    <a href="/" onClick={(e) => {e.preventDefault(); setShowCart(false)}}>Home</a>
                    <a href="#" onClick={(e) => {e.preventDefault(); setShowCart(false)}}>Plants</a>
                    <a href="#" className="cart-link" onClick={(e) => {e.preventDefault(); setShowCart(true)}}>
                        <h1 className="cart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.3A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path></svg>
                            <span className="cart_quantity_count">{totalQuantity}</span>
                        </h1>
                    </a>
                </div>
            </nav>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category) => (
                        <div key={category.category}>
                            <h2 className="category-title">{category.category}</h2>
                            <div className="plant-list">
                                {category.plants.map((plant) => (
                                    <div className="product-card" key={plant.name}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-price">{plant.cost}</div>
                                        <button 
                                            className="product-button" 
                                            disabled={cart.some(item => item.name === plant.name)}
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            {cart.some(item => item.name === plant.name) ? "Added" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;
