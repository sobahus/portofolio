import { Button } from "@/components/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section
      aria-label="not-found"
      className="min-h-[calc(100vh-100px)] flex justify-center items-center"
    >
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
