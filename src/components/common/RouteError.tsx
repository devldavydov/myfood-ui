import { Alert } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

export default function RouteError() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <Alert variant="danger">{`Ошибка: ${
      error.statusText || error.message
    }`}</Alert>
  );
}
