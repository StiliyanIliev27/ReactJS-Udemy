import { API_URL } from "../constants";
import { useCart } from "../storage/CartContext";

export default function Meal({ meal }) {
  const { addToCart } = useCart();
  const imageSrc = `${API_URL}/${meal.image}`;

  return (
    <div className="meal-item">
      <article>
        <img src={imageSrc} alt="meal image" />
        <h3>{meal.name}</h3>
        <span className="meal-item-price">${meal.price}</span>
        <p className="meal-item-description">{meal.description}</p>
        <button
          className="button meal-item-actions"
          onClick={() => addToCart(meal)}
        >
          Add to cart
        </button>
      </article>
    </div>
  );
}
