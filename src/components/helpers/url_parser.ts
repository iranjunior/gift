export const addingCurrentQueryParams = (url: string) => {
  console.log('addingCurrentQueryParams', url)
  const currentQueryParams = new URLSearchParams(window.location.search)
  if (url.at(0) === '/') return `${url}?`.concat(currentQueryParams.toString())
  const newUrl = new URL(url)
  newUrl.search = currentQueryParams.toString()
  return newUrl.toString()
}
