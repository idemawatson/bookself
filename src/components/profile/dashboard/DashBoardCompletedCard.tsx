import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material'
import { Suspense, useState } from 'react'
import DashboardRatioChart from './DashBoardRatioChart'
import DashboardBarChart from '@/components/profile/dashboard/DashBoardBarChart'
import dayjs from '@/lib/importDayjs'

const DashboardCompletedCard = () => {
  const [year, setYear] = useState(Number(dayjs().format('YYYY')))

  return (
    <Card sx={{ my: 2 }} elevation={0}>
      <CardContent sx={{ pb: 0 }}>
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{ textAlign: 'right' }}
            onClick={() => setYear(year - 1)}
          >
            <IconButton size='large'>
              <ChevronLeft color='primary' />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                display: 'flex',
                direction: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Typography color='negative' sx={{ fontWeight: 500 }}>
                {year}年
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ textAlign: 'left' }}
            onClick={() => setYear(year + 1)}
          >
            <IconButton size='large'>
              <ChevronRight color='primary' />
            </IconButton>
          </Grid>
        </Grid>
        <Suspense fallback={<Skeleton height={250} width='100%' />}>
          <DashboardBarChart year={year} />
        </Suspense>
        <Suspense fallback={<Skeleton height={400} width='100%' />}>
          <DashboardRatioChart year={year} />
        </Suspense>
      </CardContent>
    </Card>
  )
}

export default DashboardCompletedCard
