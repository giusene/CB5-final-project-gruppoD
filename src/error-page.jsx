import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>ʕ•ᴥ•ʔ Oops!</h1>
      <p>Unfortunately, an unexpected error has occurred ¯\_(ツ)_/¯ </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
