import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen bg-linear-to-b from-[#000A3B] to-black flex flex-col items-center justify-center text-center px-6">
      
      
      <h1 className="text-8xl font-extrabold text-[#26FF60] drop-shadow-[0_0_20px_#26FF60] animate-pulse">
        404
      </h1>

   
      <p className="text-gray-300 text-xl mt-4 max-w-lg">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      

      
      <Link
        to="/"
        className="mt-10 px-6 py-3 border border-[#26FF60] text-[#26FF60] rounded-lg text-lg font-semibold
        hover:bg-[#26FF60] hover:text-black transition-all shadow-[0_0_15px_#26FF6055]"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
