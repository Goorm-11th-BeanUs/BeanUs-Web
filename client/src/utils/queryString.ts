export const objectToParams = (o: object, initString?: string): URLSearchParams => {
  const searchParams = new URLSearchParams(initString)

  const isEmpty = (v: string | number | null | undefined) =>
    v === null || v === undefined || v === '' || v === 0

  Object.entries(o).forEach(([k, v]) => {
    if (!isEmpty(v)) {
      if (Array.isArray(v)) {
        v.map(i => {
          if (!isEmpty(i)) {
            searchParams.append(k, i.toString())
          }
        })
      } else {
        searchParams.append(k, v.toString())
      }
    }
  })

  return searchParams
}

export const queryStrToNum = (value: string | string[] | null | undefined) => {
  if (!value || ['undefined', 'null'].includes(`${value}`.toLowerCase())) return undefined

  return typeof value === 'string' ? +value : undefined
}
