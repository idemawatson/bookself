import { signOut } from "next-auth/react";
import { BaseButton } from "@/components/parts/common/BaseButton";

const SignOutButton = () => {
  return (
    <BaseButton
      color="negative"
      onClick={() =>
        signOut({
          callbackUrl: `${
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
          }/top`,
        })
      }
    >
      ログアウト
    </BaseButton>
  );
};

export default SignOutButton;
