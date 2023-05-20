import { FC, Suspense } from 'react'
import UserRecordResumePaper from '@/components/profile/userRecord/UserRecordResumePaper'
import SkeletonProfilePaper from '@/components/profile/userRecord/UserRecordSkeletonResumePaper'

type Props = {}
const UserRecordTemplate: FC<Props> = () => {
  return (
    <>
      <Suspense fallback={<SkeletonProfilePaper />}>
        <UserRecordResumePaper />
      </Suspense>
    </>
  )
}

export default UserRecordTemplate
