import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useCustomToast } from '../../hooks/useCustomToast'
import collectApi from '../collect'

export const useCreateCollect = () => {
  const { successToast } = useCustomToast()
  const navigate = useNavigate()

  const { mutate: onCreate, status } = useMutation({
    mutationFn: (params: {
      cafe_id: number
      collect_days: number[] // 타입을 명시적으로 지정
      amount: number
      position: string
      collect_time: string
    }) => {
      // params 구조 분해

      const { cafe_id, collect_days, amount, position, collect_time, ...rest } = params

      // 새로운 객체 생성
      const newParams = {
        cafe_id,
        collect_days: collect_days.map(day => ({ weekday: day, time: collect_time })),
        amount,
        position,
      }

      return collectApi.create(newParams)
    },
    onSuccess: () => {
      successToast('수거 요청이 성공적으로 등록되었습니다.')
      navigate('/collect/history')
    },
  })

  const isLoading = status === 'success'

  return { onCreate, isLoading }
}
