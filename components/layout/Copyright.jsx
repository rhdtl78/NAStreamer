const Copyright = props => {
  return (
    <copyright>
      <div className="copyright text-center">
        © 2018 Copyright:
        <a> ReNex Team</a>
      </div>

      <style jsx>
        {`
          .copyright {
            color: #000000;
            background-color: #dcdcdc;
            border-top: 1px solid rgb(0, 0, 0);
          }
        `}
      </style>
    </copyright>
  )
}

export default Copyright
