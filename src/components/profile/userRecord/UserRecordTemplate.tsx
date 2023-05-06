import UserRecordResumePaper from "@/components/profile/userRecord/UserRecordResumePaper";
import SkeletonProfilePaper from "@/components/profile/userRecord/UserRecordSkeletonResumePaper";
import { FC, Suspense } from "react";

type Props = {};
const UserRecordTemplate: FC<Props> = () => {
  return (
    <>
      <Suspense fallback={<SkeletonProfilePaper />}>
        <UserRecordResumePaper />
      </Suspense>
    </>
  );
};

export default UserRecordTemplate;
