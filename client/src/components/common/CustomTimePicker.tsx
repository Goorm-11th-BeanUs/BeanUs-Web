import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

interface CustomTimePickerProps {
  name: string
  onChange: (event: { target: { name: string; value: string } }) => void
}

const CustomTimePicker = ({ name, onChange }: CustomTimePickerProps) => {
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs())

  const handleTimeChange = (newValue: Dayjs | null) => {
    setSelectedTime(newValue)
    if (newValue) {
      onChange({
        target: {
          name,
          value: newValue.format('HH:mm'), // Dayjs 객체를 문자열로 변환
        },
      })
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker value={selectedTime} onChange={handleTimeChange} />
    </LocalizationProvider>
  )
}

export default CustomTimePicker
