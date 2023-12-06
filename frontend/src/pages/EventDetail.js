import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event}></EventItem>
    </>
  );
}

export async function loader({ request, params }) {
  const response = await fetch("http://localhost:8080/events/" + params.id);
  if (!response.ok) {
    return json({ message: "Could not fetch details" }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    method: request.method,
  });
  if (!response.ok) {
    return json({ message: "Could not delete event" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
