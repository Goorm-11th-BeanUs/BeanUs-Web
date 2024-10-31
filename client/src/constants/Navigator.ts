import { PAGE_ROUTES } from '../routes/Routes'

interface Route {
  roles?: string[]
  list: Route[]
}

interface Route {
  id: string
  path: string
  index?: false
  element?: JSX.Element
  handle: { name: string }
  hidden?: boolean
  roles?: string[]
  children?: Route[]
}

export const getRoutesByRole = (role: string, list: Route[] = PAGE_ROUTES): Route[] => {
  return list.reduce<Route[]>((result, route) => {
    // roles가 지정되지 않거나, 포함되어야함
    if (!route?.roles || route.roles.includes(role)) {
      let children = route.children
      if (children?.length) {
        // 하위 요소 재귀처리
        children = getRoutesByRole(role, children)
      }
      result.push({
        ...route,
        children,
      })
    }
    return result
  }, [])
}
