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

export async function sendOrderAsync(order) {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({ order: order }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to submit the order.");
    }

    resData.message = "Order created!";
    return resData.message;
  } catch (error) {
    console.error("Error sending order:", error);
  }
}
