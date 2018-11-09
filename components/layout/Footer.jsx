import PropTypes from 'prop-types'
import { ICON_NAME } from 'react-icons/fa'
const Footer = props => {
  return (
    <footer className="page-footer font-small">
      <span style={{ color: '' }} />
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mt-md-0 mt-3">
            <div className="view overlay z-depth-1-half lg-hidde ">
              <img
                src="../image/renex_main_rogo.jpg"
                className="img-thumbnail"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text"> Developer Member</h5>

            <ul className="list-unstyled">
              <li>
                <a>Kwon Hyuk Jin</a>
              </li>
              <li>
                <a>Kong Jung Hoon</a>
              </li>
              <li>
                <a>Lee Jung Hoon</a>
              </li>
              <li>
                <a>Lee Kyung Min</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text">Developer Git</h5>

            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/ponyong">ponyong</a>
              </li>
              <li>
                <a href="https://github.com/rhdtl78">rhdtl78</a>
              </li>
              <li>
                <a href="https://github.com/azxca1731">azxca1731</a>
              </li>
              <li>
                <a href="https://github.com/kmlee95">kmlee95</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text">Developer Email</h5>

            <ul className="list-unstyled">
              <li>
                <a>ponyong@naver.com</a>
              </li>
              <li>
                <a>rhdtl78@gmail.com</a>
              </li>
              <li>
                <a>azxca1731@gmail.com</a>
              </li>
              <li>
                <a>kmlee9598@gamil.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center">
        © 2018 Copyright:
        <a> ReNex Team</a>
      </div>

      <style jsx>{`
        .page-footer {
          border-top: 1px solid rgb(231, 232, 239);
        }
        .footer-copyright {
          border-top: 1px solid rgb(231, 232, 239);
          background-color: #888888;
        }
      `}</style>
    </footer>
  )
}
export default Footer
