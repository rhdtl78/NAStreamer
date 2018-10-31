import Sidebar from 'react-sidebar'

const HeadDrawer = props => {
  const handleSideBar = open => {
    props.handleOpen(open)
  }
  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={props.open}
      onSetOpen={handleSideBar}
      styles={{ sidebar: { background: 'white' } }}
      pullRight
    />
  )
}

export default HeadDrawer
