import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

const styles = () => ({
  root: {
    width: '100%'
  },
  footer: {
    width: '100%',
    backgroundColor: '#E0E0E0',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  }
})

const Footer = props => {
  const { classes } = props
  return (
    <footer className={classes.footer}>
      <Grid container direction="column" justify="center" alignItems="center">
        <h3>Powered by ReNex </h3>
        <p>
          푸터 영역 모 알아서 집어넣으면 될듯 대충 깃허브 아이콘 넣고 그러지머
        </p>
        <small>2018.10.26</small>
      </Grid>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
