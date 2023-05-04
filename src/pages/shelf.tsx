import { FC } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import ShelfTemplate from "@/components/shelf/Template";

const Page: FC & { layout?: typeof MainLayout } = ShelfTemplate;
Page.layout = MainLayout;

export default Page;
