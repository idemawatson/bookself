import { signIn } from "next-auth/react";
import { BaseButton } from "@/components/parts/common/BaseButton";

const SignInButton = () => {
  return (
    <BaseButton
      color="primary"
      onClick={() => {
        signIn("google", { callbackUrl: "/shelf" });
      }}
      sx={{ fontSize: "1.5rem" }}
    >
      ログイン
    </BaseButton>
  );
};

export default SignInButton;
