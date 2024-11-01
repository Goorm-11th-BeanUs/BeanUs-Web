export interface ICollectDay {
  weekday: number
  time: string
}

export interface ICollectRequest {
  cafe_id: number
  collect_days: ICollectDay[]
  amount: number
  position: string
}
