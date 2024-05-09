import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-500 text-black flex justify-center items-center">
      <div>
        <h1 className="text-5xl text-gray-800">To Make This Page</h1>
        <Link
          className="font-bold text-5xl underline text-gray-900"
          href="/auth/signin"
        >
          Authenticate
        </Link>
      </div>
    </div>
  );
}
