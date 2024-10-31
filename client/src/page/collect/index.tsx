import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EventIcon from '@mui/icons-material/Event'
import { Box, Button, FormControl, TextField, Typography } from '@mui/material'

const Collect = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      p={2}
      sx={{ border: '1px solid #e0e0e0', borderRadius: '4px' }}
    >
      <Box margin="auto" width="100%" display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#388e3c' } }}
          startIcon={<EventIcon />}
        >
          수거 현황
        </Button>
      </Box>
      <Box display="flex" flex={1}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="50%"
          sx={{ gap: 4, p: 2 }}
        >
          <Box display="flex" sx={{ gap: 4 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#2196f3', '&:hover': { backgroundColor: '#1976d2' } }}
              startIcon={<AccessTimeIcon />}
            >
              30분 뒤
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#2196f3', '&:hover': { backgroundColor: '#1976d2' } }}
              startIcon={<AccessTimeIcon />}
            >
              1시간 뒤
            </Button>
          </Box>
          <Box display="flex" sx={{ gap: 4 }} flexDirection="column" alignItems="center">
            <Typography variant="h6">커피 찌꺼기 무게</Typography>
            <FormControl required>
              <TextField
                id="conceptId"
                type="number"
                label="무게(g)"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ff9800',
                    },
                    '&:hover fieldset': {
                      borderColor: '#fb8c00',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#f57c00',
                    },
                  },
                }}
              />
            </FormControl>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="50%"
          p={2}
        >
          <Typography variant="h6">수거 요청 날짜</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Collect
