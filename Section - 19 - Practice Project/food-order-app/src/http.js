import { API_URL } from "./constants";

export async function getMealsAsync() {
  try {
    const response = await fetch(`${API_URL}/meals`);
   
	if (!response.ok) {
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
}
