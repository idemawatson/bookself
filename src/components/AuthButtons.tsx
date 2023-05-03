"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      style={{ marginRight: 10 }}
      onClick={() => {
        signIn("google", { callbackUrl: "http://localhost:3000/samples" });
      }}
    >
      Sign in
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
