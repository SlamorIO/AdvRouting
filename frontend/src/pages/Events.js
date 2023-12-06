import { Link } from "react-router-dom";

export default function EventsPage() {
  return (
    <>
      <h2>Events</h2>
      <ul>
        <li>
          <Link to="1">Event 1</Link>
        </li>
        <li>
          <Link to="2">Event 2</Link>
        </li>
        <li>
          <Link to="3">Event 3</Link>
        </li>
      </ul>
    </>
  );
}
