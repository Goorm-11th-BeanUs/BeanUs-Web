import { Box, Typography, styled } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { NumberFormatValues, NumericFormat } from 'react-number-format'

interface NumericFormatCustomProps {
  name: string
  onChange: (event: { target: { name: string; value: string | number } }) => void
  value?: number | string
  showButtons?: boolean
  step?: number
  label?: string
  [key: string]: any // 추가 props를 위한 인덱스 시그니처
}

const NumericFormatCustom = React.forwardRef<HTMLInputElement, NumericFormatCustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, value = 0, showButtons = false, step = 1, label, ...other } = props

    const [direction, setDirection] = useState<-1 | 0 | 1>(0) // 0: 중립, 1: 증가, -1: 감소

    const changeValue = useCallback(
      (increment: number) => {
        onChange({
          target: {
            name: props.name,
            value: Math.max(0, (parseInt(value.toString(), 10) || 0) + increment * step),
          },
        })
      },
      [onChange, props.name, value, step]
    )

    const handleMouseDown = useCallback((increment: -1 | 1) => {
      setDirection(increment)
    }, [])

    const handleMouseUp = useCallback(() => {
      setDirection(0)
    }, [])

    useEffect(() => {
      if (direction !== 0) {
        const interval = setInterval(() => {
          changeValue(direction)
        }, 70)

        return () => clearInterval(interval)
      }
    }, [direction, changeValue])

    return (
      <Box display="grid" gridTemplateColumns="1fr auto" alignItems="center" sx={{ width: '100%' }}>
        <NumericFormat
          {...other}
          getInputRef={ref}
          value={value}
          onValueChange={(values: NumberFormatValues) => {
            onChange({
              target: {
                name: props.name,
                value: values.value === '' ? '' : values.floatValue || 0,
              },
            })
          }}
          thousandSeparator
          valueIsNumericString
          isAllowed={values => values.value === '' || (values.floatValue || 0) >= 0}
        />

        <Box sx={{ display: 'flex', gap: '2px' }}>
          {label && (
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {label}
            </Typography>
          )}

          {showButtons && (
            <Box
              display="grid"
              gridTemplateRows="auto auto"
              alignItems="center"
              sx={{ padding: '4px', gap: '2px' }}
            >
              <StyledButton
                type="button"
                className={numberInputClasses.incrementButton}
                onMouseDown={() => handleMouseDown(1)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div className="arrow">+</div>
              </StyledButton>
              <StyledButton
                type="button"
                className={numberInputClasses.decrementButton}
                onMouseDown={() => handleMouseDown(-1)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div className="arrow">-</div>
              </StyledButton>
            </Box>
          )}
        </Box>
      </Box>
    )
  }
)

export default NumericFormatCustom

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
} as const

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
} as const

const numberInputClasses = {
  focused: 'focused',
  incrementButton: 'incrementButton',
  decrementButton: 'decrementButton',
} as const

const StyledButton = styled('button')(
  ({ theme }) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 0;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    cursor: pointer;
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid;
    border-bottom: 0;
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    width: 15px;
    height: 15px;

    &:hover {
      cursor: pointer;
      color: #FFF;
      background: ${theme.palette.mode === 'dark' ? blue[600] : blue[500]};
      border-color: ${theme.palette.mode === 'dark' ? blue[400] : blue[600]};
    }
  }

  &.${numberInputClasses.decrementButton} {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid;
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    width: 15px;
    height: 15px;
  }

  &:hover {
    cursor: pointer;
    color: #FFF;
    background: ${theme.palette.mode === 'dark' ? blue[600] : blue[500]};
    border-color: ${theme.palette.mode === 'dark' ? blue[400] : blue[600]};
  }

  & .arrow {
    transform: translateY(-1px);
  }
`
)
