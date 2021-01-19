import Head from 'next/head'
import '../styles/global.less'

import PropTypes from 'prop-types'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Animes Company Hero</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
}

export default MyApp
