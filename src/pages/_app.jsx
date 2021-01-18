import Head from 'next/head'

import PropTypes from 'prop-types'

import '../styles/theme.less'
import '../styles/global.less'

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
