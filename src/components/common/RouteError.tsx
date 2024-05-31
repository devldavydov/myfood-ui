import { useRouteError } from "react-router-dom";

export default function RouteError() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="alert alert-danger">
      {`Ошибка: ${error.statusText || error.message}`}
    </div>
  );
}
