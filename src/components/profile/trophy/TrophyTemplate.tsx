import { FC, Suspense } from 'react'
import TrophyList from '@/components/profile/trophy/TrophyList'
import SkeletonProfilePaper from '@/components/profile/userRecord/UserRecordSkeletonResumePaper'

const TrophyTemplate: FC = () => {
  return (
    <>
      <Suspense fallback={<SkeletonProfilePaper />}>
        <TrophyList />
      </Suspense>
    </>
  )
}

export default TrophyTemplate
