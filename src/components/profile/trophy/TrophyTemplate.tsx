import SkeletonProfilePaper from "@/components/profile/userRecord/UserRecordSkeletonResumePaper";
import { FC, Suspense } from "react";
import UserRecordTrophyCard from "@/components/profile/trophy/UserRecordTrophyCard";

type Props = {};
const TrophyTemplate: FC<Props> = () => {
  return (
    <>
      <Suspense fallback={<SkeletonProfilePaper />}>
        <UserRecordTrophyCard />
      </Suspense>
    </>
  );
};

export default TrophyTemplate;
