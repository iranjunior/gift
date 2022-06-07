export const addingCurrentQueryParams = (url: string) => {
  const currentQueryParams = new URLSearchParams(window.location.search)
  if (url[0] === '/') return `${url}?`.concat(currentQueryParams.toString())
  const newUrl = new URL(url)
  newUrl.search = currentQueryParams.toString()
  return newUrl.toString()
}
