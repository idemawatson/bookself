import { FC, ReactNode } from "react";
import TheAppBackground from "@/components/parts/TheAppBackground";
import TheAppBar from "@/components/parts/TheAppBar";
import TheBottomNavigation from "@/components/parts/TheBottomNavigation";
import TheOffset from "../parts/TheOffset";

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
