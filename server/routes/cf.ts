export default defineEventHandler((event) => {
  if (getQuery(event)['go-get'] === '1') {
    setResponseHeader(event, 'Content-Type', 'text/html')
    return `<html>
  <head>
    <meta name="go-import" content="dario.lol/cf git https://github.com/dajooo/cloudflare-cli" />
    <meta name="go-source" content="dario.lol/cf https://github.com/dajooo/cloudflare-cli https://github.com/dajooo/cloudflare-cli/tree/main{/dir} https://github.com/dajooo/cloudflare-cli/blob/main{/dir}/{file}#L{line}">
  </head>
</html>`
  }
  return sendRedirect(event, 'https://pkg.go.dev/dario.lol/cf')
})
