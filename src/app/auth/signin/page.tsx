"use client";
import { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import type { AuthUserParams } from "@/types/user";
import api from "@/api/api";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { setUser } = useUser();

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
      alert("login successfully" + JSON.stringify(user?.user));
      // set the user to a global state to make requests later on
      setUser(user?.user);
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
          <input
            id="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-6 relative">
          <input
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <input
              type="checkbox"
              id="show"
              name="show"
              checked={show}
              onChange={(e) => setShow(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
