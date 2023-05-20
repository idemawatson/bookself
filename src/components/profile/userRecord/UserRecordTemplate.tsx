import { FC, Suspense } from 'react'
import UserRecordResumePaper from '@/components/profile/userRecord/UserRecordResumePaper'
import SkeletonProfilePaper from '@/components/profile/userRecord/UserRecordSkeletonResumePaper'

const UserRecordTemplate: FC = () => {
  return (
    <>
      <Suspense fallback={<SkeletonProfilePaper />}>
        <UserRecordResumePaper />
      </Suspense>
    </>
  )
}

export default UserRecordTemplate
