import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import HeadDrawer from '../../components/layout/HeadDrawer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { children } = this.props
    const { open } = this.state
    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
        </Head>
        <CssBaseline />
        <Header handleOpen={this.handleOpen} />
        <HeadDrawer open={open} onClose={this.handleClose} />
        {children}
        <Footer />
      </div>
    )
  }
}
export default Layout
