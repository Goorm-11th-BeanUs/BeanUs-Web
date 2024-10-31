import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import CustomTimePicker from '../../components/common/CustomTimePicker'
import DayPicker from '../../components/common/DayPicker'
import NumericFormatCustom from '../../components/common/NumericFormatCustom'
import { useCustomToast } from '../../hooks/useCustomToast'
import { useCreateCollect } from '../../service/queries/useCollect'

const POSITION_OPTIONS = [
  { id: 1, value: '문 앞에 둘게요' },
  { id: 2, value: '가게 안에 둘게요' },
  { id: 3, value: '수거 전 연락주세요' },
  { id: 4, value: '직접 전달할게요' },
]

const initialState = {
  cafe_id: '',
  collect_days: [] as number[], // 타입을 명시적으로 지정
  amount: 0,
  position: POSITION_OPTIONS[0].value,
  collect_time: '09:00',
}

const Collect = () => {
  const [form, setForm] = useState({
    ...initialState,
    cafe_id: Math.floor(Math.random() * 1000000),
  })

  const { onCreate, isLoading } = useCreateCollect()

  const { errorToast } = useCustomToast()

  const handleChange = (e: any) => {
    const { name, value } = e.target

    if (name === 'amount') {
      const numericValue = parseFloat(value)

      if (isNaN(numericValue)) {
        errorToast('커피찌꺼기 무게는 숫자여야 합니다.')
        return
      }

      if (numericValue < 0) {
        errorToast('커피찌꺼기 무게는 0보다 작을 수 없습니다.')
        return
      } else if (numericValue > 100) {
        errorToast('커피찌꺼기 무게는 100보다 클 수 없습니다.')
        return
      }
    }

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreate(form)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 40px',
      }}
    >
      <form onSubmit={handleSubmit}>
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
            <DayPicker name="collect_days" onChange={handleChange} />
          </FormControl>
          <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4">수거 시간을 선택해 주세요.</Typography>
            <CustomTimePicker name="collect_time" onChange={handleChange} />
          </FormControl>
          <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4">커피찌꺼기 무게</Typography>
            <TextField
              name="amount"
              onChange={handleChange}
              value={form.amount}
              slotProps={{
                input: {
                  inputComponent: NumericFormatCustom as any,
                  inputProps: {
                    showButtons: true,
                    step: 10,
                    label: 'L',
                  },
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4">수거 위치를 선택해 주세요.</Typography>
            <Select name="position" value={form.position} onChange={handleChange}>
              {POSITION_OPTIONS.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" type="submit" disabled={isLoading} size="large">
              시작하기
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Collect
