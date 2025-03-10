import { useState, useEffect } from "react";
import Meal from "./components/Meal";
import CartModal from "./components/CartModal"
import { getMealsAsync } from "./http";
import { useCart } from "./storage/CartContext";

function App() {
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const { getCartItemCount } = useCart();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsFetching(true);
      try {
        const data = await getMealsAsync();
        setMeals(data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
      setIsFetching(false);
    };

    fetchMeals();
  }, []);

  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src="/logo.jpg" alt="logo" />
          <h1>React Food</h1>
        </div>
        <button
          className="text-button"
          onClick={() => setCartVisible(!cartVisible)}
        >
          Cart({getCartItemCount()})
        </button>
      </div>

      <div id="meals">
        {isFetching && <p className="fetching">Loading...</p>}
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </div>

      {cartVisible && <CartModal onClose={() => setCartVisible(false)} />}
    </>
  );
}

export default App;
