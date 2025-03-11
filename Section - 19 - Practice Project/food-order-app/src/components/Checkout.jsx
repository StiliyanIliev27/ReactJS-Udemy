import { useCart } from "../storage/CartContext";
import { sendOrderAsync } from "../http";
import Input from "./Input";
import { createPortal } from "react-dom";
import SubmittedForm from "./SubmittedForm";
import { useState } from "react";

export default function Checkout({ onClose }) {
  const { getCartTotalAmount } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    let orderData = {
      items: [],
      customer: {},
    };

    for (const [key, value] of formData.entries()) {
      orderData.items.push({ id: value });
      orderData.customer[key] = value;
    }

    try {
      const response = await sendOrderAsync(orderData);
      console.log(response);
      setIsSubmitted(true);
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  }

  if (isSubmitted) {
    return createPortal(
      <div className="modal">
        <SubmittedForm onClose={onClose} />
      </div>,
      document.getElementById("modal")
    );
  }

  return (
    <div className="control">
      <h2>Checkout</h2>
      <p>Total Amount: ${getCartTotalAmount()}</p>

      <form onSubmit={handleSubmit}>
        <Input label="Full Name" name="name" id="name" />
        <Input label="E-Mail Address" name="email" id="email" />
        <Input label="Street" name="street" id="street" />
        <div className="control-row">
          <Input label="Postal Code" name="postal-code" id="postal-code" />
          <Input label="City" name="city" id="city" />
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={onClose}>
            Close
          </button>
          <button type="submit" className="button">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
}
