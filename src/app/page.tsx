import { LoginButton, LogoutButton } from "@/components/AuthButtons";
import Head from "./Head";

export default function Home() {
  return (
    <>
      <Head />
      <body>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
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
      </body>
    </>
  );
}
