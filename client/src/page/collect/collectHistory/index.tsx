import { Box, Button, colors, FormControl, Tab, Tabs, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import ReviewCard from './component/ReviewCard'
import { useState } from 'react'
import TabPanel from './component/TabPanel'
import HistoryCard from './component/HistoryCard'

// PENDING = 진행 전
// ACTIVE = 진행 중
// DONE = 완료
interface History {
  history_id: number
  client_name: string
  time: string
  state: 'PENDING' | 'ACTIVE' | 'DONE'
  amount: number
}

const dummyData: History[] = [
  {
    history_id: 1,
    client_name: '성신 유치원',
    time: '2024-10-31T09:50:44.075770+09:00',
    state: 'PENDING',
    amount: 10,
  },
  {
    history_id: 2,
    client_name: '성신 유치원',
    time: '2024-10-31T09:50:44.075770+09:00',
    state: 'ACTIVE',
    amount: 10,
  },
  {
    history_id: 3,
    client_name: '성신 유치원',
    time: '2024-10-31T09:50:44.075770+09:00',
    state: 'DONE',
    amount: 10,
  },
  {
    history_id: 4,
    client_name: '성신 유치원',
    time: '2024-10-31T09:50:44.075770+09:00',
    state: 'PENDING',
    amount: 10,
  },
]

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const CollectHistory = () => {
  const [tabState, setTabState] = useState(0)

  const tabChangeHandle = (event: React.SyntheticEvent, newIndex: number) => {
    setTabState(newIndex)
  }


  return (
    <Box>
      <Box
        display="flex"
        width="25vw"
        p={0}
        sx={{
          background: '#F9FAFB',
          height: '100%',
          position: 'fixed',
          top: 64,
          left: 0,
          zIndex: 1,
        }}
      >
        <Box
          display={'flex'}
          flexDirection="column"
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
          sx={{ marginBottom: '45vh' }}
        >
          <Box>
            <Box>
              <CafeLogo />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection="column"
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography variant="h3" sx={{ color: '#26A86C', fontSize: '24px' }}>
              Lv.1
            </Typography>
            <Typography variant="h3" sx={{ margin: '10px 0px', fontSize: '24px' }}>
              카페 제주
            </Typography>
          </Box>
          <Box
            display={'flex'}
            flexDirection="column"
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
              현재까지 탄소배출을
            </Typography>
            <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>000t 줄이셨어요!</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={'column'}
        width="75vw"
        padding="0"
        p={0}
        sx={{ height: '100%', position: 'fixed', top: 64, right: 0, zIndex: 1 }}
      >
        <Box width={'calc(100% - 60px)'} height={'200px'} display={'flex'} p={4}>
          <ReviewCard>방향제가 되었어요!</ReviewCard>
          <ReviewCard>커피연필이 되었어요!</ReviewCard>
        </Box>
        <Box sx={{ padding: '0px 32px' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabState} onChange={tabChangeHandle} aria-label="basic tabs example">
              <Tab label={<Box display={'flex'} sx={{fontSize:'20px',position:'relative'}}>진행중<ArryCount items={dummyData} stateType="ACTIVE"/></Box>} {...a11yProps(0)} />
              <Tab label={<Box display={'flex'} sx={{fontSize:'20px',position:'relative'}}>진행 예정<ArryCount items={dummyData} stateType="PENDING"/></Box>} {...a11yProps(1)} />
              <Tab label={<Box display={'flex'} sx={{fontSize:'20px',position:'relative'}}>진행 완료<ArryCount items={dummyData} stateType="DONE"/></Box>} {...a11yProps(2)} />
            </Tabs>
          </Box>
        </Box>
        <TabPanel value={tabState} index={0}>
          {dummyData
            .filter(({ state }) => state === 'ACTIVE')
            .map(({ history_id, client_name, time, state, amount }: History, idx: number) => (
              <HistoryCard
                key={idx}
                historyId={history_id}
                clientName={client_name}
                time={time}
                state={state}
                amount={amount}
              />
            ))}
        </TabPanel>
        <TabPanel value={tabState} index={1}>
          {dummyData
            .filter(({ state }) => state === 'PENDING')
            .map(({ history_id, client_name, time, state, amount }: History, idx: number) => (
              <HistoryCard
                key={idx}
                historyId={history_id}
                clientName={client_name}
                time={time}
                state={state}
                amount={amount}
              />
            ))}
        </TabPanel>
        <TabPanel value={tabState} index={2}>
          {dummyData
            .filter(({ state }) => state === 'DONE')
            .map(({ history_id, client_name, time, state, amount }: History, idx: number) => (
              <HistoryCard
                key={idx}
                historyId={history_id}
                clientName={client_name}
                time={time}
                state={state}
                amount={amount}
              />
            ))}
        </TabPanel>
      </Box>
    </Box>
  )
}

export default CollectHistory

const CafeLogoBox = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin: 20px 0px;
`
const CafeLogo = () => {
  return (
    <CafeLogoBox>
      <img src="https://picsum.photos/200/300?random=1" alt="Cafe Logo" />
    </CafeLogoBox>
  )
}



const ArryCountStyled = styled.div`
margin-left: 5px;
  color: #fff;
  background-color: #26A86C;
  width: 30px;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  width: 25px;
  height: 25px;
`



const ArryCount = ({ items, stateType }: { items: History[],stateType:string }) => {
  const count = items.filter(({state})=>state === stateType).length;
  if(count === 0) return null;
  return (
    <ArryCountStyled>{count}</ArryCountStyled>
  )
}