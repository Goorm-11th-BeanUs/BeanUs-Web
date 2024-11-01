import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat' // ES 2015
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)
dayjs.tz.setDefault('Asia/Seoul')

export default dayjs.tz
