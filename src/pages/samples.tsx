import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });
  if (session?.status === "loading") {
    return <p>Loading....</p>;
  }

  return <div>{JSON.stringify(session)}</div>;
}
