import { Box, Grid } from '@mui/material'
import { FC, Suspense } from 'react'
import SignOutButton from '../parts/common/SignOutButton'
import SettingsUserInfoCard from '@/components/settings/SettingsUserInfoCard'
import SettingsUserLoader from '@/components/settings/SettingsUserLoader'

const SettingsTemplate: FC = () => {
  return (
    <>
      <Box sx={{ mx: 2 }}>
        <Grid container>
          <Grid xs={12} item>
            <Suspense fallback={<SettingsUserLoader />}>
              <SettingsUserInfoCard />
            </Suspense>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='flex-end'
          justifyContent='flex-end'
          sx={{ py: 4 }}
        >
          <Grid xs={6} item sx={{ textAlign: 'end' }}>
            <SignOutButton />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SettingsTemplate
