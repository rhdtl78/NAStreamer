import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <AppBar position="static">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/category">
        <a style={linkStyle}>About</a>
      </Link>
    </AppBar>
  </div>
)

export default Header
