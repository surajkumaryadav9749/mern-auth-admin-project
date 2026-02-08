import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-start text-center p-24">
      <h1 className="text-7xl font-extrabold text-orange-400">404</h1>

      <h2 className="text-2xl font-bold text-white mt-4">Page Not Found</h2>

      <p className="text-gray-400 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-orange-400 hover:bg-orange-500 transition text-white px-6 py-3 rounded text-sm font-medium"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
