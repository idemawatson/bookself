import { Container } from '@mui/material'
import { FC, Suspense } from 'react'
import ShelfPage from '@/components/shelf/ShelfContent'
import ShelfFilterTabs from '@/components/shelf/ShelfFilterTabs'
import ShelfHeader from '@/components/shelf/ShelfHeader'
import SkeletonShelfPage from '@/components/shelf/ShelfSkeletonPage'

type Props = {}

const ShelfTemplate: FC<Props> = ({}) => {
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
