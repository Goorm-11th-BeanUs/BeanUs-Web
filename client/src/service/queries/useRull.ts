import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '.'
import rullApi from '../rull'

export const useRull = (id: string) => {
  const query = useQuery({
    queryFn: () => {
      return rullApi.getItem(id)
    },
    queryKey: queryKeys.RULL.list(id),
    select: response => {
      return response.data
    },
  })
  return query
}
