import Layout from '../container/layout/Layout'
import { Grid } from '@material-ui/core'
import 'video-react/dist/video-react.css'
import { Player } from 'video-react'
const Video = () => (
  <Layout>
    <Grid container direction="column" justify="center" alignitem="center">
      <Player width="100" height="1" playsInline src="/api" />
    </Grid>
  </Layout>
)

export default Video
