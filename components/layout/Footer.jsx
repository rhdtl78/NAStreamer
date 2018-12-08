import PropTypes from 'prop-types'
import { FaUserTie, FaGithub, FaEnvelope } from 'react-icons/fa'
const Footer = props => {
  return (
    <footer className="page-footer font-small">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mt-md-0 mt-3">
            <div className="area view overlay z-depth-1-half lg-hidde ">
              <img
                src="../image/renex_main_rogo.jpg"
                className="img-thumbnail"
                alt=""
              />
            </div>
          </div>

          <div className="area col-md-3 mb-3 mb-md-0 ">
            <h5 className="/">
              <FaUserTie />
              <span className="text">Developer Member</span>
            </h5>

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

          <div className="area col-md-3 mb-md-0 mb-3">
            <h5 className="/">
              <FaGithub />
              <span className="text">Developer Git</span>
            </h5>

            <ul className="github list-unstyled">
              <li>
                <a href="https://github.com/ponyong">
                  <span className="git-text">ponyong</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/rhdtl78">
                  <span className="git-text">rhdtl78</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/azxca1731">
                  <span className="git-text">azxca1731</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/kmlee95">
                  <span className="git-text">kmlee95</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="area col-md-3 mb-md-0 mb-3">
            <h5 className="/">
              <FaEnvelope />
              <span className="text">Developer Email</span>
            </h5>

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
      <style jsx>{`
        .page-footer {
          border-top: 1px solid rgb(0, 0, 0);
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .copyright {
          border-top: 5px solid rgb(27, 49, 94);
          background-color: #888888;
        }
        .area {
          border-right: 2px solid rgb(231, 232, 239);
        }
        .text {
          margin-left: 6px;
        }
        .git-text {
          color: #000000;
        }
      `}</style>
    </footer>
  )
}
export default Footer
