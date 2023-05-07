import { FC } from "react";
import DashboardCompletedCard from "./DashBoardCompletedCard";

type Props = {};
const DashboardTemplate: FC<Props> = () => {
  return (
    <>
      <DashboardCompletedCard />
    </>
  );
};

export default DashboardTemplate;
