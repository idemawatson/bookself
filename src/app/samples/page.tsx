"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Article() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });
  if (session?.status === "loading") {
    return <p>Loading....</p>;
  }

  return <div>{JSON.stringify(session)}</div>;
}
