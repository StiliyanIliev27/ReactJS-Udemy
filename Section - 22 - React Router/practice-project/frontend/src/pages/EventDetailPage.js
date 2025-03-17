import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const { event } = useLoaderData();

  return (
    <>
      <h1>{event.title}</h1>
      <EventItem event={event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ params }) {
  const response = await fetch(`http://localhost:5000/events/${params.id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch event.");
  }

  return response;
}
