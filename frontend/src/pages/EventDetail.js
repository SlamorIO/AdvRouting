import { Link, useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page {params.id}</h1>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
