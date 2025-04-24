import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <section
      aria-label="not-found"
      className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center gap-2"
    >
      <h1
        className="text-9xl font-bold text-shadow-sm text-shadow-black dark:text-shadow-white opacity-80 hover:opacity-100 hover:text-shadow-md transition-all duration-300 cursor-pointer
          border-b-4 dark:hover:border-white hover:border-black 
        "
      >
        404
      </h1>
      <p
        className="text-3xl opacity-60 hover:opacity-100 text-shadow-gray-900 dark:text-shadow-white hover:text-shadow-xs transition-all duration-300 cursor-pointer
        "
      >
        Page Not Found
      </p>

      <Link href="/" className="mt-4">
        <Button
          variant="default"
          className="hover:scale-105 transition-all duration-300
            opacity-80 hover:opacity-100
          "
        >
          <Home />
          Back to Home
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
