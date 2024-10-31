import { Box, FormControl, Typography } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers'
import { useId, useState } from 'react'
import DayPicker from '../../components/common/DayPicker'

const initialState = {
  cafe_id: '',
  collect_days: [],
  amount: 0,
}

const Collect = () => {
  const [form, setForm] = useState({
    ...initialState,
    cafe_id: useId(),
  })

  console.log('Form:', form)

  const handleDayChange = (selectedDays: number[]) => {
    console.log('Selected days:', selectedDays)
  }

  return (
    <Box display="flex" flexDirection="column" height="100%" p={4} gap={4}>
      <Box
        margin="auto"
        width="100%"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography variant="h2">수거 정보 수정</Typography>
      </Box>
      <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4">수거 요일을 모두 선택해주세요.</Typography>
        <DayPicker onChange={handleDayChange} />
      </FormControl>
      <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4">수거 시간을 선택해 주세요.</Typography>
        <TimePicker onChange={newValue => console.log('Selected time:', newValue)} />
      </FormControl>
    </Box>
  )
}

export default Collect
