// _error.js is only used in production. In development you'll get an error with the call stack to know where the error originated from.
import React from 'react'


const ErrorPage = ({ statusCode }) => (
  <main
    title='Error'
  >
    <h1>Error (code {statusCode})</h1>
    <p>Sorry, but there was an error (code {statusCode}).</p>
  </main>
)

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res
    ? res.statusCode
    : err
      ? err.statusCode
      : 404
  return { statusCode }
}

export default ErrorPage