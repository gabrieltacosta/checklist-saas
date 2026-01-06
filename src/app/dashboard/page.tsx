"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const DashboardPage = () => {
  const [loading, setLoading] = useState(false);
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logout successful");
          redirect("/login");
        },
        onRequest: () => {
          setLoading(true);
        },
        onResponse: () => {
          setLoading(false);
        },
        onError: () => {
          toast.error("Logout failed");
          setLoading(false);
        },
      },
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={handleSignOut} variant={"destructive"}>
        {loading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <p> Logout </p>
        )}
      </Button>
    </div>
  );
};

export default DashboardPage;
