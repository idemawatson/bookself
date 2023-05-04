import { LoginButton, LogoutButton } from "@/components/AuthButtons";

const Home = () => {
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
};

export default Home;
