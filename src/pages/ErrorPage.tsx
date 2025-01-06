import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-5xl font-barlow text-secondary">404</h1>
        <h3>Ooops!!</h3>
        <p>The page you are looking for does not exist or is unavailable</p>
        <button
          onClick={() => navigate("/")}
          className="py-2 px-4 bg-secondary rounded-md text-white mt-2 mx-auto"
        >
          Go to home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
