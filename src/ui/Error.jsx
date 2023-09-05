import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="mt-6">
      <h1 className="text-3xl font-semibold">Something went wrong 😢</h1>
      <p className="text-stone-500">{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
