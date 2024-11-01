import https from '../lib/Axios/config'
import { ILoginRequest } from './models/login'

const RequestURL = '/api/account'

const loginApi = {
  // 로그인 요청
  login: async (searchParams: ILoginRequest) => {
    const { data } = await https.post(`${RequestURL}/login`, searchParams)
    return data
  },
  // // 상세 요청
  // getItem: async (id: number) => {
  //   const { data } = await https.get(`${RequestURL}/${id}`)
  //   return data
  // },
  // // 수정
  // updateItem: async (form: ICollectRequest) => {
  //   const { data } = await https.put(`${RequestURL}/${form.cafe_id}`, form)
  //   return data
  // },
  // // 추가
  // create: async (form: ICollectRequest) => {
  //   const { cafe_id, collect_days, amount, position } = form

  //   const newParams = {
  //     collect_days,
  //     amount,
  //     position,
  //   }

  //   const { data } = await https.post(` ${RequestURL}/${cafe_id}/rule`, newParams)
  //   return data
  // },
}

export default loginApi
