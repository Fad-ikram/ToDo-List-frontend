import { SquareX } from "lucide-react";
const NotFound = () => {
  return (
    <main className="bg-gray-200 h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-primary flex gap-4 items-center justify-center">
         404 - Page Not Found <SquareX size={39} />
      </h1>
      <p className="text-gray-600 text-lg">
        The page you are looking for does not exist
      </p>
      
    </main>
  );
};

export default NotFound;
