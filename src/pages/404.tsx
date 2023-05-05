import Error404 from "@/components/parts/common/404";
import { BaseButton } from "@/components/parts/common/BaseButton";
import { useRouter } from "next/router";

export default function Custom500() {
  const router = useRouter();
  return (
    <Error404>
      <BaseButton
        sx={{ my: 1 }}
        color="secondary"
        onClick={() => router.push("/shelf")}
      >
        本棚に戻る
      </BaseButton>
    </Error404>
  );
}
