import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ params }) {
  const response = await fetch(`http://localhost:5000/events/${params.id}`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch event details." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return response;
}
