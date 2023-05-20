import { Container } from '@mui/material'
import { FC, Suspense } from 'react'
import ShelfPage from '@/components/shelf/ShelfContent'
import ShelfFilterTabs from '@/components/shelf/ShelfFilterTabs'
import SkeletonShelfPage from '@/components/shelf/ShelfSkeletonPage'

const ShelfTemplate: FC = () => {
  return (
    <Container sx={{ pb: 10 }}>
      <ShelfFilterTabs />
      <Suspense fallback={<SkeletonShelfPage />}>
        <ShelfPage />
      </Suspense>
    </Container>
  )
}

export default ShelfTemplate
