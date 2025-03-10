import { useState, useEffect } from "react";
import Meal from "./components/Meal";
import { getMealsAsync } from "./http";

function App() {
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

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
      <div id="meals">
        {isFetching && <p className="fetching">Loading...</p>}
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </div>
    </>
  );
}

export default App;
