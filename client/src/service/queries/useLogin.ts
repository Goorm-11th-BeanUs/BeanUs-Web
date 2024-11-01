import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCustomToast } from '../../hooks/useCustomToast'
import { setUserState } from '../../store/user'
import loginApi from '../login'
import rullApi from '../rull'

export const useLogin = () => {
  const { successToast, errorToast } = useCustomToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useQuery를 함수형으로 수정
  const fetchOtherData = async (id: string) => {
    try {
      const response = await rullApi.getItem(id)
      return response
    } catch (error) {
      console.error('fetchOtherData error:', error)
      throw error
    }
  }

  const { mutate: onCreate, status } = useMutation({
    mutationFn: (params: { user_id: string; password: string }) => {
      return loginApi.login(params)
    },
    onSuccess: async res => {
      successToast(res.msg)
      dispatch(setUserState(res.cafe_id))

      if (res.cafe_id) {
        try {
          const otherRes = await rullApi.getItem(res.cafe_id)
          if (otherRes?.data) {
            navigate('/collect/history')
          } else {
            navigate('/collect')
          }
        } catch (error) {
          console.error('Error fetching other data:', error)
        }
      }
    },
    onError: error => {
      errorToast('사용자 정보를 확인해주세요.')
    },
  })

  const isLoading = status === 'pending'

  return { onCreate, isLoading }
}
