import { LoginButton, LogoutButton } from "@/components/AuthButtons";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <LoginButton />
      <LogoutButton />
    </main>
  );
}
