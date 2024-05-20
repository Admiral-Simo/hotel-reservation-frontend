"use client";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useUser();

  {
    /* i have to show the {firstname} {firstname} {email}*/
  }
  return (
    <div className="min-h-screen bg-yellow-500 text-black">
      <nav className="flex items-center py-2 justify-between max-w-screen-lg mx-auto">
        <h1 className="text-2xl text-gray-800">Hotel Reserver</h1>

        {user ? (
          <Modal>
            <div className="flex items-center gap-2">
              <p>{user?.email}</p>
              <div className="rounded-full size-10 bg-white"></div>
            </div>
          </Modal>
        ) : (
          <Link href="/auth/signin" className="underline">
            LOGIN
          </Link>
        )}
      </nav>
    </div>
  );
}

function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { setUser } = useUser();
  const handleLogout = () => {
    setUser(null);
    router.push("/auth/signin");
  };
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Do you wanna log out?</DialogTitle>
          <DialogDescription>
            This action will log you out of your account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button onClick={handleLogout} type="button" variant="default">
            Log Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
