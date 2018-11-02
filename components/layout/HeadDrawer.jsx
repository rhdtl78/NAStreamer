import Sidebar from 'react-sidebar'

const HeadDrawer = props => {
  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={props.open}
      onSetOpen={open => {
        props.handleOpen(open)
      }}
      styles={{ sidebar: { background: 'white' } }}
      pullRight
    />
  )
}

export default HeadDrawer
