import { useCart } from "../storage/CartContext";
import Input from "./Input";

export default function Checkout({ onClose }) {
  const { getCartTotalAmount } = useCart();

  return (
    <div className="control">
      <h2>Checkout</h2>
      <p>Total Amount: ${getCartTotalAmount()}</p>

      <form>
        <Input label="Full Name" name="email" id="email" />
        <Input label="E-Mail Address" name="email" id="email" />
        <Input label="Street" name="street" id="street" />
        <div className="control-row">
          <Input label="Postal Code" name="postal-code" id="postal-code" />
          <Input label="City" name="city" id="city" required={true} />
        </div>
      </form>

      <div className="modal-actions">
        <button className="text-button" onClick={onClose}>
          Close
        </button>
        <button className="button">Submit Order</button>
      </div>
    </div>
  );
}
