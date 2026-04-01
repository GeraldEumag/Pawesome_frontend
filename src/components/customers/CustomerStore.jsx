import React, { useState } from "react";
import "./CustomerStore.css";

const storeData = {
  Food: [
    { id: 1, name: "Premium Dog Food", price: 1200 },
    { id: 2, name: "Cat Kibble", price: 950 }
  ],
  Accessories: [
    { id: 3, name: "Leash & Collar Set", price: 450 },
    { id: 4, name: "Pet Bed", price: 800 }
  ],
  Grooming: [
    { id: 5, name: "Shampoo", price: 300 },
    { id: 6, name: "Brush", price: 200 }
  ]
};

export default function CustomerStore() {
  const [category, setCategory] = useState("Food");
  const [cart, setCart] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState("cart"); // cart → payment → receipt
  const [paymentImage, setPaymentImage] = useState(null);
  const [orderType, setOrderType] = useState("Pick-up");

  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(cart.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const updateQty = (id, change) => {
    setCart(
      cart
        .map((c) =>
          c.id === id ? { ...c, qty: Math.max(0, c.qty + change) } : c
        )
        .filter((c) => c.qty > 0)
    );
  };

  const getTotal = () => cart.reduce((total, item) => total + item.price * item.qty, 0);

  const proceedCheckout = () => {
    if (cart.length > 0) setCheckoutStep("payment");
  };

  const confirmPayment = () => {
    if (paymentImage) setCheckoutStep("receipt");
  };

  return (
    <div className="kiosk-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Categories</h2>
        {Object.keys(storeData).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`category-btn ${category === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Section */}
      <div className="products">
        <h2>{category}</h2>
        <div className="product-grid">
          {storeData[category].map((item) => (
            <div key={item.id} className="product-card">
              <h3>{item.name}</h3>
              <p>₱{item.price}</p>
              <button onClick={() => addToCart(item)}>Add</button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart / Payment / Receipt Section */}
      <div className="cart">
        {checkoutStep === "cart" && (
          <>
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>No items yet</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <span>{item.name}</span>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                    <span>₱{item.price * item.qty}</span>
                  </li>
                ))}
              </ul>
            )}
            <h3 className="total">Total: ₱{getTotal()}</h3>
            <button className="checkout-btn" onClick={proceedCheckout}>Checkout</button>
          </>
        )}

        {checkoutStep === "payment" && (
          <>
            <h2>Upload Payment</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPaymentImage(e.target.files[0])}
            />
            <h3>Choose Order Type</h3>
            <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
              <option>Pick-up</option>
              <option>Delivery</option>
            </select>
            <button className="checkout-btn" onClick={confirmPayment}>Confirm Payment</button>
          </>
        )}

        {checkoutStep === "receipt" && (
          <div className="receipt">
            <h2>Pawesome Store Receipt</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.qty} — ₱{item.price * item.qty}
                </li>
              ))}
            </ul>
            <h3>Total Paid: ₱{getTotal()}</h3>
            <p>Order Type: {orderType}</p>
            <p>Payment Method: Online (Proof Uploaded)</p>
            {paymentImage && (
              <p><em>Payment image uploaded successfully.</em></p>
            )}
            <button className="checkout-btn" onClick={() => setCheckoutStep("cart")}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}