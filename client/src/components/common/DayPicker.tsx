import { Box, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useState } from 'react'

interface DayButtonProps {
  selected: boolean
}

const DayButton = styled(IconButton, {
  shouldForwardProp: prop => prop !== 'selected',
})<DayButtonProps>(({ theme, selected }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: selected ? theme.palette.primary.main : 'transparent',
  border: `1px solid ${selected ? 'transparent' : theme.palette.grey[300]}`,
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.grey[200],
  },
  margin: theme.spacing(0, 0.5),
}))

const StyledTypography = styled(Typography)<{ selected: boolean }>(({ theme, selected }) => ({
  color: selected ? theme.palette.common.white : theme.palette.text.secondary,
  fontSize: 14,
}))

interface DayPickerProps {
  onChange?: (selectedDays: number[]) => void
}

const DayPicker: React.FC<DayPickerProps> = ({ onChange }) => {
  const [selectedDays, setSelectedDays] = useState<number[]>([])

  const days = [
    { id: 0, label: '일' },
    { id: 1, label: '월' },
    { id: 2, label: '화' },
    { id: 3, label: '수' },
    { id: 4, label: '목' },
    { id: 5, label: '금' },
    { id: 6, label: '토' },
  ]

  const handleDayClick = (dayId: number) => {
    const newSelectedDays = selectedDays.includes(dayId)
      ? selectedDays.filter(id => id !== dayId)
      : [...selectedDays, dayId]

    setSelectedDays(newSelectedDays)
    onChange?.(newSelectedDays)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1 }}>
        {days.map(day => (
          <DayButton
            key={day.id}
            selected={selectedDays.includes(day.id)}
            onClick={() => handleDayClick(day.id)}
          >
            <StyledTypography selected={selectedDays.includes(day.id)}>
              {day.label}
            </StyledTypography>
          </DayButton>
        ))}
      </Box>
    </Box>
  )
}

export default DayPicker
