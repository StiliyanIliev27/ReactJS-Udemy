import { useLoaderData } from "react-router";
import EventsNavigation from "../components/EventsNavigation";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  
  return (
    <>
      <h1>Events Page</h1>
      <EventsNavigation />
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:5000/events");

  if (!response.ok) {
    throw new Error("Failed to fetch events.");
  }

  return response;
}
