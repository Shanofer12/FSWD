import React, { useState } from "react";

const EcommerceApp = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999 },
    { id: 2, name: "Smart Watch", price: 2999 },
    { id: 3, name: "Bluetooth Speaker", price: 1499 },
    { id: 4, name: "Laptop Backpack", price: 999 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f1f5f9;
        }

        .container {
          padding: 20px;
          max-width: 1100px;
          margin: auto;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .layout {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .products {
          flex: 2;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
        }

        .product-card {
          background: #fff;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          text-align: center;
        }

        .product-card h3 {
          margin-bottom: 10px;
        }

        .product-card p {
          margin-bottom: 12px;
          font-weight: bold;
        }

        .product-card button {
          padding: 8px 14px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .product-card button:hover {
          background: #1e40af;
        }

        .cart {
          flex: 1;
          background: #fff;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          min-width: 260px;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .cart-item button {
          background: red;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 2px 6px;
          cursor: pointer;
        }

        .total {
          margin-top: 10px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .layout {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="container">
        <h1>🛍 Simple E-Commerce Store</h1>

        <div className="layout">
          {/* PRODUCT LIST */}
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>₹ {product.price}</p>
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* CART */}
          <div className="cart">
            <h3>🛒 Cart ({cart.length})</h3>

            {cart.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name}</span>
                  <span>
                    ₹{item.price}{" "}
                    <button onClick={() => removeFromCart(index)}>x</button>
                  </span>
                </div>
              ))
            )}

            <div className="total">Total: ₹ {totalPrice}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceApp;
