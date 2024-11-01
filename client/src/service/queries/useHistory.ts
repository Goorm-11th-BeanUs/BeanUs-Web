import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '.'
import historyApi from '../history'

export const useHistory = (id: string) => {
  const query = useQuery({
    queryFn: () => {
      return historyApi.getItem(id)
    },
    queryKey: queryKeys.HISTORY.list(id),
    select: response => {
      return response.data
    },
  })
  return query
}
