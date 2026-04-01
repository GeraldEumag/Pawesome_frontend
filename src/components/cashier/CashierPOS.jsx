import React, { useMemo, useState } from "react";
import "./CashierPOS.css";

const categories = [
  { id: "all", label: "All Menu", icon: "🍽️" },
  { id: "burger", label: "Burger", icon: "🍔" },
  { id: "fried", label: "Fried Chicken", icon: "🍗" },
  { id: "drink", label: "Drink", icon: "🥤" },
  { id: "coffee", label: "Coffee", icon: "☕" },
  { id: "dessert", label: "Dessert", icon: "🍰" },
  { id: "other", label: "Other Menu", icon: "🧁" },
];

const products = [
  { id: 1, name: "Deluxe Crispy Burger", price: 6.99, category: "burger" },
  { id: 2, name: "Classic Crispy Burger", price: 4.75, category: "burger" },
  { id: 3, name: "Special Crispy Burger", price: 5.75, category: "burger" },
  { id: 4, name: "Special Burger", price: 6.49, category: "burger" },
  { id: 5, name: "Spicy Chicken Burger", price: 5.49, category: "burger" },
  { id: 6, name: "Cheeseburger Meal", price: 5.2, category: "burger" },
  { id: 7, name: "Combo Drumstick", price: 8.99, category: "fried" },
  { id: 8, name: "Double Cheese Burger", price: 7.25, category: "burger" },
  { id: 9, name: "Coca Cola", price: 3.0, category: "drink" },
  { id: 10, name: "Classic Cheeseburger", price: 4.99, category: "burger" },
  { id: 11, name: "3 Cheese Wings", price: 3.49, category: "fried" },
  { id: 12, name: "Sprite", price: 3.0, category: "drink" },
  { id: 13, name: "Chocolate Milkshake", price: 3.5, category: "drink" },
  { id: 14, name: "3 Drumstick", price: 4.75, category: "fried" },
  { id: 15, name: "Cappuccino", price: 3.0, category: "coffee" },
  { id: 16, name: "Ice Cream Cup", price: 2.5, category: "dessert" },
];

const formatPrice = (value) => `₱${value.toFixed(2)}`;

const CashierPOS = ({ onCheckout }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [orderType, setOrderType] = useState("Dine In");
  const [customer, setCustomer] = useState("");
  const [voucher, setVoucher] = useState("");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const discount = voucher.trim() ? 25 : 0;
  const totalAmount = Math.max(subtotal + tax - discount, 0);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearOrder = () => {
    setCart([]);
    setCustomer("");
    setVoucher("");
    setOrderType("Dine In");
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const transaction = {
      id: Date.now(),
      items: cart,
      subtotal,
      tax,
      discount,
      total: totalAmount,
      orderType,
      customer: customer || "Walk-in",
      createdAt: new Date().toISOString(),
    };

    if (onCheckout) onCheckout(transaction);
    clearOrder();
  };

  return (
    <div className="pos-page">
      <aside className="pos-categories">
        <div className="pos-category-list">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`pos-category-item ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </aside>

      <main className="pos-products-panel">
        <div className="pos-header-row">
          <div>
            <p className="pos-section-label">POS</p>
            <h2>Product Menu</h2>
          </div>
          <div className="pos-search-bar">
            <input type="search" placeholder="Search products..." />
          </div>
        </div>

        <div className="pos-product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-thumb" />
              <div className="product-card-body">
                <strong>{product.name}</strong>
                <span>{formatPrice(product.price)}</span>
              </div>
              <button type="button" className="product-add" onClick={() => addToCart(product)}>
                Add
              </button>
            </article>
          ))}
        </div>
      </main>

      <aside className="pos-order-panel">
        <div className="order-top-actions">
          <button type="button" className="quick-action">Customer</button>
          <button type="button" className="quick-action">Tables</button>
          <button type="button" className="quick-action">Discount</button>
          <button type="button" className="quick-action">Save Bill</button>
        </div>

        <div className="order-details-card">
          <div className="order-details-header">
            <h3>Order Details</h3>
          </div>

          <div className="order-type-switch">
            {["Dine In", "Take Away"].map((type) => (
              <button
                key={type}
                type="button"
                className={`type-button ${orderType === type ? "selected" : ""}`}
                onClick={() => setOrderType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="order-cart-list">
            {cart.length === 0 ? (
              <div className="empty-order">
                <div className="empty-icon">🛒</div>
                <strong>No Order</strong>
                <p>Tap the product to add into order</p>
              </div>
            ) : (
              cart.map((item) => (
                <div className="order-item" key={item.id}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.quantity} x {formatPrice(item.price)}</p>
                  </div>
                  <button type="button" className="remove-item" onClick={() => removeItem(item.id)}>×</button>
                </div>
              ))
            )}
          </div>

          <div className="order-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <strong>{formatPrice(tax)}</strong>
            </div>
            <div className="summary-row">
              <span>Voucher</span>
              <strong>{voucher ? `- ${formatPrice(discount)}` : formatPrice(0)}</strong>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <strong>{formatPrice(totalAmount)}</strong>
            </div>
          </div>

          <label className="voucher-field">
            <span>Voucher code</span>
            <input
              type="text"
              value={voucher}
              onChange={(e) => setVoucher(e.target.value)}
              placeholder="Enter code"
            />
          </label>

          <label className="customer-field">
            <span>Customer Name</span>
            <input
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              placeholder="Walk-in or name"
            />
          </label>

          <button type="button" className="checkout-button" onClick={handleCheckout} disabled={cart.length === 0}>
            Process Transaction
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CashierPOS;