import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'

const ReviewCardStyle = styled.div`
  border-radius: 15px;
  border: 1px solid #e0e0e0;

  margin-right: 20px;
  width: calc(100% - 100px);
  display: flex;
  justify-content: space-between;

  overflow: hidden;

  &:last-of-type {
    margin-right: 0;
  }

  & > div:first-of-type {
    padding: 30px;
  }

  & > div:last-of-type {
    overflow: hidden;
    img {
      width: 200px;
      height: 200px;
    }
  }
`
const ArticleWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ReviewCard = ({ children }: any) => {
  const today = dayjs().format('YYYY.MM.DD')
  return (
    <ReviewCardStyle>
      <ArticleWrapperStyled>
        <Box display={'flex'} flexDirection={'column'} width={'100%'}>
          <Typography variant="h5" sx={{ color: '#AEAEB2', marginBottom: '5px' }}>
            {today}
          </Typography>
          <Typography variant="h3" display={'flex'} flexDirection={'column'}>
            <span>커피찌꺼기가</span>
            <span>{children}</span>
          </Typography>
          <div></div>
        </Box>
      </ArticleWrapperStyled>
      <div>
        <img src="https://picsum.photos/200/300?random=1" />
      </div>
    </ReviewCardStyle>
  )
}

export default ReviewCard
