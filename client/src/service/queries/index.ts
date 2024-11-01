// import type { IBannerSearchParams } from "@/service/models/banners";
// import type { InfoSearchOption } from "@/service/models/info";
// import { IPointSearchParams } from "@/service/models/points";
// import type { IPostCommentsSearchParam } from "@/service/models/postComments";
// import type { IPostsSearchParam } from "@/service/models/posts";
// import type { IProductScheduleSearchParam, IProductSearchParam } from "@/service/models/product";
// import type {
//   IProductReviewSearchParam,
//   IReviewCommentSearchParam,
// } from "@/service/models/productReviews";
// import { IPaymentSearchParam, IReservationSearchParam } from "@/service/models/reservations";
// import {
//   IProductViewSectionSearchParam,
//   IReviewViewSectionSearchParam,
// } from "@/service/models/viewSections";
// import type { TListBaseParam } from "@/type";
import { objectToParams } from '../../utils/queryString'
import { ICollectRequest } from '../models/collect'
import { ILoginRequest } from '../models/login'

const QueryType = {
  getList: (keys: string[], searchParams?: object | URLSearchParams) => {
    const params = searchParams ? objectToParams(searchParams) : null

    return !!params?.size ? [...keys, params.toString()] : keys
  },
  getDetail: (keys: string[], id?: number | string) =>
    id !== undefined ? [...keys, `${id}`] : keys,
  login: (keys: string[], searchParams?: object | URLSearchParams) => {
    const params = searchParams ? objectToParams(searchParams) : null

    return !!params?.size ? [...keys, params.toString()] : keys
  },
}

export const queryKeys = {
  // USERS: {
  //   all: ["users"] as const,
  //   me: () => [...queryKeys.USERS.all, "me"],

  //   ADMINS: {
  //     all: () => [...queryKeys.USERS.all, "admin-requests"],
  //     list: (_params?: TListBaseParam) =>
  //       QueryType.getList([...queryKeys.USERS.ADMINS.all()], _params),
  //   },

  // },

  COLLECT: {
    all: ['collect'] as const,
    list: (url: string, _params?: ICollectRequest) =>
      QueryType.getList([...queryKeys.COLLECT.all, url], _params),
    detail: (id: number) => QueryType.getDetail([...queryKeys.COLLECT.all], id),
  },
  LOGIN: {
    all: ['login'] as const,
    list: (url: string, _params?: ILoginRequest) =>
      QueryType.getList([...queryKeys.LOGIN.all, url], _params),
    detail: (id: number) => QueryType.getDetail([...queryKeys.LOGIN.all], id),
  },
  RULL: {
    all: ['rull'] as const,
    list: (url: string, _params?: { cafeId: string }) =>
      QueryType.getList([...queryKeys.RULL.all, url], _params),
    detail: (id: string) => QueryType.getDetail([...queryKeys.RULL.all], id),
  },
  HISTORY: {
    all: ['history'] as const,
    list: (url: string, _params?: { cafeId: string }) =>
      QueryType.getList([...queryKeys.HISTORY.all, url], _params),
    detail: (id: string) => QueryType.getDetail([...queryKeys.HISTORY.all], id),
  },

  // BANNERS: {
  //   all: ["banners"] as const,
  //   list: (_params: IBannerSearchParams) => QueryType.getList([...queryKeys.BANNERS.all], _params),
  //   detail: (id: number) => QueryType.getDetail([...queryKeys.BANNERS.all], id),
  // },
}
