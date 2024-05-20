"use client";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="min-h-screen bg-yellow-500 text-black flex justify-center items-center">
      <div>
        <h1 className="text-5xl text-gray-800">To Make This Page</h1>

        {user ? (
          JSON.stringify(user)
        ) : (
          <Link
            className="font-bold text-5xl underline text-gray-900"
            href="/auth/signin"
          >
            Authenticate
          </Link>
        )}
      </div>
    </div>
  );
}
