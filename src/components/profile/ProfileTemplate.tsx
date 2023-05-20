import { Box, Divider, Paper, Tab, Tabs } from '@mui/material'
import { FC, SyntheticEvent, useState } from 'react'
import DashboardTemplate from '@/components/profile/dashboard/DashboardTemplate'
import TrophyTemplate from '@/components/profile/trophy/TrophyTemplate'
import UserRecordTemplate from '@/components/profile/userRecord/UserRecordTemplate'

type Props = {}
const ProfileTemplate: FC<Props> = () => {
  const [tab, setTab] = useState(0)
  const handleChange = (_: SyntheticEvent<Element, Event>, value: number) => {
    setTab(value)
  }
  const renderContent = () => {
    if (tab === 0) return <UserRecordTemplate />
    if (tab === 1) return <DashboardTemplate />
    if (tab === 2) return <TrophyTemplate />
  }
  return (
    <>
      <Paper elevation={0} sx={{ mx: 2 }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          variant='fullWidth'
          TabIndicatorProps={{
            style: {
              backgroundColor: '#101010',
              height: '0',
            },
          }}
        >
          <Tab label='レベル' />
          <Tab label='読書記録' />
          <Tab label='トロフィー' />
        </Tabs>
        <Divider />
      </Paper>
      <Box sx={{ maxHeight: '90%', overflowY: 'auto' }}>{renderContent()}</Box>
    </>
  )
}

export default ProfileTemplate
