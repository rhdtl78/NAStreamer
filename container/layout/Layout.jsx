import Head from 'next/head'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import HeaderDrawer from '../../components/layout/HeadDrawer'
import 'bootstrap/dist/css/bootstrap.min.css'
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleOpen = open => {
    this.setState({ open: open })
  }

  handleLog = () => {
    console.log('wow')
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
        <HeaderDrawer open={open} handleOpen={this.handleOpen} />
        <Header handleOpen={this.handleOpen} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
