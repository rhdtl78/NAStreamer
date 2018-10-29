import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <footer className="page-footer font-small bg-secondary">
      <div className="container-fluid text-center text-md-left">

        <div className="row">

  
          <div className="col-md-6 mt-md-0 mt-3">

          <h5 className="text-uppercase">Footer </h5>
          <p>Here you can use rows and columns here to organize your footer content.</p>

        </div>


        <div className="col-md-3 mb-md-0 mb-3">

            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>

          </div>
 

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>

          </div>


       </div>
  

    </div>
      <div className="footer-copyright text-center py-3">© 2018 Copyright:
        <a> ReNex Team</a>
    </div>
      
 
    
    </footer>
  )
}
export default Footer

