import { FC, ReactNode } from "react";
import TheAppBackground from "@/components/parts/common/TheAppBackground";
import TheAppBar from "@/components/parts/common/TheAppBar";
import TheBottomNavigation from "@/components/parts/common/TheBottomNavigation";
import TheOffset from "../parts/common/TheOffset";

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <TheAppBar />
      <TheOffset />
      <TheAppBackground>{children}</TheAppBackground>
      <TheBottomNavigation />
    </>
  );
};
