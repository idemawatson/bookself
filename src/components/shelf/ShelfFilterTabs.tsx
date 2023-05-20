import { Box, Tab, Tabs } from '@mui/material'
import { FC, SyntheticEvent } from 'react'
import { useShelfFilterTab } from '@/hooks/shelf/useShelfFilterTab'

const TABS = ['すべて', '読みたい', '積読', '読んでる', '読んだ']

const ShelfFilterTabs: FC = () => {
  const { shelfFilterTab: tab, setShelfFilterTab: setTab } = useShelfFilterTab()

  const handleChange = (
    _: SyntheticEvent<Element, Event>,
    newValue: number,
  ) => {
    setTab(newValue)
  }

  return (
    <>
      <Box
        sx={{
          height: 50,
          backgroundColor: 'white',
          display: 'flex',
          marginBottom: 1,
        }}
      >
        <Tabs
          value={tab}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons={false}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#101010',
              height: '0',
            },
          }}
        >
          {TABS.map((tab) => (
            <Tab label={tab} key={tab} />
          ))}
        </Tabs>
      </Box>
    </>
  )
}
export default ShelfFilterTabs
