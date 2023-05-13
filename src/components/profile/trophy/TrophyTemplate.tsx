import SkeletonProfilePaper from "@/components/profile/userRecord/UserRecordSkeletonResumePaper";
import { FC, Suspense } from "react";
import TrophyList from "@/components/profile/trophy/TrophyList";

type Props = {};
const TrophyTemplate: FC<Props> = () => {
  return (
    <>
      <Suspense fallback={<SkeletonProfilePaper />}>
        <TrophyList />
      </Suspense>
    </>
  );
};

export default TrophyTemplate;
