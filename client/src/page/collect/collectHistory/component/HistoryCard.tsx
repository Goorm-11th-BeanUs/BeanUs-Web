import styled from '@emotion/styled'
import PersonIcon from '@mui/icons-material/Person'
import { Typography } from '@mui/material'
import dayjs from 'dayjs'
import { formatDate } from '../../../../lib/dateFormat'

interface HistoryCardProps {
  historyId: number
  clientName: string
  time: string
  status: 'READY' | 'WATING' | 'COMPLETED'
  amount: number
}

const HistoryCardStyled = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 15px;
  border: 1px solid #e5e5ea;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-of-type {
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      border-radius: 50%;
      background-color: #f2f2f7;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > svg {
        font-size: 50px;
        color: #fff;
      }
    }
  }
`

const ArticleWrapperStyled = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    height: 100%;
  }
`

const StatusTagStyled = styled.div`
  color: #fff;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`

const ContentStyled = styled.div`
  & span {
    font-size: 16px;
    color: #8e8e93;
  }
`

const MiddleDot = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const weekList: string[] = ['일', '월', '화', '수', '목', '금', '토']

const HistoryCard = ({ clientName, time, status, amount }: HistoryCardProps) => {
  const hhmmTime: string = formatDate(time, 'HH:mm')
  const weekStr: string = weekList[dayjs(time).day()]

  return (
    <HistoryCardStyled>
      <div>
        <div>
          <PersonIcon />
        </div>
      </div>

      <ArticleWrapperStyled>
        <div>
          <Typography variant="h3" sx={{ margin: '10px 0px' }}>
            {clientName}
          </Typography>
          <StatusTagStyled>
            {status === 'READY' && (
              <Typography
                variant="h5"
                sx={{ background: '#88C9AB', borderRadius: '20px', padding: '1px 8px' }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                height={'100%'}
              >
                수거예정
              </Typography>
            )}
            {status === 'WATING' && (
              <Typography
                variant="h5"
                sx={{ background: '#26A86C', borderRadius: '20px', padding: '1px 8px' }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                height={'100%'}
              >
                진행중
              </Typography>
            )}
            {status === 'COMPLETED' && (
              <Typography
                variant="h5"
                sx={{ background: '#D1D1D6', borderRadius: '20px', padding: '1px 8px' }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                height={'100%'}
              >
                완료
              </Typography>
            )}
          </StatusTagStyled>
        </div>
        <ContentStyled>
          <span>
            커피찌꺼기 {amount}L <MiddleDot>&#183;</MiddleDot> {weekStr}요일
            <MiddleDot>&#183;</MiddleDot> {hhmmTime}
          </span>
        </ContentStyled>
      </ArticleWrapperStyled>
    </HistoryCardStyled>
  )
}

export default HistoryCard
