import { signIn } from "next-auth/react";
import { BaseButton } from "@/components/parts/common/BaseButton";

const SignInButton = () => {
  return (
    <BaseButton
      color="negative"
      onClick={() => {
        signIn("google", { callbackUrl: "/shelf" });
      }}
      sx={{ fontSize: "1rem" }}
    >
      ログイン
    </BaseButton>
  );
};

export default SignInButton;
