import { FC } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import SettingsTemplate from "@/components/settings/SettingsTemplate";

const Page: FC & { layout?: typeof MainLayout } = SettingsTemplate;
Page.layout = MainLayout;

export default Page;
