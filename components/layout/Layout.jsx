import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './Header'
import Footer from './Footer'

/*const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}*/

const Layout = props => (
  <div /*style={layoutStyle}*/>
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <CssBaseline />
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
