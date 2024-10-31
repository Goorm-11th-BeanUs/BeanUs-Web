import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import dayjsKST from './dayjsTz'

dayjs.locale('ko') // 한국어

// export const formatDate = (dateStr, format = 'YYYY-MM-DD') => {
export const formatDate = (dateStr: string, format = 'YYYY-MM-DD') => {
  const date = dayjs(dateStr)
  return date.isValid() ? date.format(format) : dateStr
}

export const dateToFormat = (date: Date, format = 'YYYY-MM-DD') => {
  return dayjs(date).format(format)
}

/** KST날짜 문자열 로컬 Date로 반환 */
export const getLocalDate = (kstDateString: string) => {
  const kstDate = dayjsKST(kstDateString)
  return kstDate.isValid() ? kstDate.local().toDate() : undefined
}
