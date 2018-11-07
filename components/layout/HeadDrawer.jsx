import Sidebar from 'react-sidebar'
import SidebarContent from './SidebarContent'

const HeadDrawer = props => {
  return (
    <Sidebar
      sidebar={<SidebarContent userName={props.userName}/>}
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
