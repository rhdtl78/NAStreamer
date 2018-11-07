import Sidebar from 'react-sidebar'
import SidebarContent from './SidebarContent'

const HeadDrawer = props => {
  return (
    <Sidebar
      sidebar={<b>NAStreamer</b>}
      open={props.open}
      onSetOpen={open => {
        props.handleOpen(open)
      }}
      styles={{ sidebar: { background: 'white' } }}
      pullRight
    >
      <b>MainContent</b>
      <SidebarContent userName={props.userName}/>
    </Sidebar>
  )
}

export default HeadDrawer
