import { FC } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import ProfileTemplate from "@/components/profile/ProfileTemplate";

const Page: FC & { layout?: typeof MainLayout } = ProfileTemplate;
Page.layout = MainLayout;

export default Page;
