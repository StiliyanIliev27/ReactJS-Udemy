import { useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../storage/CartContext";
import Checkout from "./Checkout";

export default function CartModal({ onClose }) {
  const { cart, addToCart, removeFromCart, getCartTotalAmount } = useCart();
  const [isCheckoutProceeded, setIsCheckoutProceeded] = useState(false);

  const isCartEmpty = cart.length === 0;

	function handleCheckout() {
		setIsCheckoutProceeded(true);
	}

  if (isCartEmpty) {
    return createPortal(
      <>
        <div className="modal-overlay" onClick={onClose} /> {/* Overlay */}
        <div className="modal">
          <div className="cart">
            <div className="empty-cart">
              <img src="/empty-cart.png" alt="" />
              <p>Your cart is empty.</p>
            </div>
            <div className="modal-actions">
              <button className="text-button" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </>,
      document.getElementById("modal")
    );
  }

  if (isCheckoutProceeded) {
    return createPortal(
      <>
        <div className="modal-overlay" onClick={onClose} /> {/* Overlay */}
				<div className="modal">
					<Checkout onClose={onClose}/>
				</div>
      </>,
      document.getElementById("modal")
    );
  }

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} /> {/* Overlay */}
      <div className="modal">
        <div className="cart">
          <h2>Your Cart</h2>

          <ul>
            {cart.map((product) => (
              <li className="cart-item" key={product.id}>
                <p>
                  {product.name} - {product.quantity} x ${product.price}
                </p>
                <div className="cart-item-actions">
                  <button onClick={() => removeFromCart(product)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => addToCart(product)}>+</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <span>${getCartTotalAmount().toFixed(2)}</span>
          </div>

          <div className="modal-actions">
            <button className="text-button" onClick={onClose}>
              Close
            </button>
            <button className="button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
