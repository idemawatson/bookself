import { useLoading } from "@/components/parts/TheLoading/hook";
import { useSession as useNextAuthSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useSession = () => {
  const router = useRouter();
  const session = useNextAuthSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    if (session.status !== "authenticated") {
      showLoading();
    } else {
      hideLoading();
    }
  }, [session.status]);

  return session.data;
};

export default useSession;
