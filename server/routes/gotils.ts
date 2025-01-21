export default defineEventHandler((event) => {
  if (getQuery(event)['go-get'] === '1') {
    setResponseHeader(event, 'Content-Type', 'text/html')
    return `<html><head><meta name="go-import" content="dario.lol/gotils git https://github.com/dajooo/gotils" /></head></html>`
  }
  return sendRedirect(event, 'https://pkg.go.dev/dario.lol/gotils')
})