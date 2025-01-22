export default defineEventHandler((event) => {
  if (getQuery(event)['go-get'] === '1') {
    setResponseHeader(event, 'Content-Type', 'text/html')
    return `<html>
  <head>
    <meta name="go-import" content="dario.lol/gotils git https://github.com/dajooo/gotils" />
    <meta name="go-source" content="dario.lol/gotils https://github.com/dajooo/gotils https://github.com/dajooo/gotils/tree/main{/dir} https://github.com/dajooo/gotils/blob/main{/dir}/{file}#L{line}">
  </head>
</html>`
  }
  return sendRedirect(event, 'https://pkg.go.dev/dario.lol/gotils')
})