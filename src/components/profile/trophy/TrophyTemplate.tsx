import { FC, Suspense } from 'react'
import TrophyList from '@/components/profile/trophy/TrophyList'
import SkeletonProfilePaper from '@/components/profile/userRecord/UserRecordSkeletonResumePaper'

type Props = {}
const TrophyTemplate: FC<Props> = () => {
  return (
    <>
      <Suspense fallback={<SkeletonProfilePaper />}>
        <TrophyList />
      </Suspense>
    </>
  )
}

export default TrophyTemplate
