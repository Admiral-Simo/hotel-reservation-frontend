"use client";
import { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import type { AuthUserParams } from "@/types/user";
import api from "@/api/api";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation((user: AuthUserParams) =>
    api.post("auth", user),
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here

    try {
      const { data: user } = await loginMutation.mutateAsync({
        email,
        password,
      });
      alert("login successfully" + JSON.stringify(user));
      // TODO: set the user to a global state to make requests later on
      // TODO: redirect to main page
    } catch (err) {
      console.log("login failed", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 text-black">
      <form
        className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 font-bold text-gray-800">Sign In</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
