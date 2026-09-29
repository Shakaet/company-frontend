import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto py-32 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="mt-4 text-gray-600">Page not found.</p>
      <Link href="/" className="inline-block mt-8 bg-blue-600 text-white px-6 py-2.5 rounded-lg">
        Back Home
      </Link>
    </div>
  );
}