import { Box } from '@mui/material'
import { FC, Suspense } from 'react'
import TrophyList from '@/components/profile/trophy/TrophyList'
import SkeletonProfilePaper from '@/components/profile/userRecord/UserRecordSkeletonResumePaper'

const TrophyTemplate: FC = () => {
  return (
    <>
      <Suspense fallback={<SkeletonProfilePaper />}>
        <Box sx={{ pb: 6 }}>
          <TrophyList />
        </Box>
      </Suspense>
    </>
  )
}

export default TrophyTemplate
