import { useRouteError } from "react-router-dom";

const Error = () => {
  const message = useRouteError();
  return (
    <>
      <div>
        <h1>Oops! Something went wrong</h1>
        <h2>{message.status + " : " + message.statusText}</h2>
      </div>
    </>
  );
};

export default Error;
