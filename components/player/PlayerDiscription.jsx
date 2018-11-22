import { Badge } from 'reactstrap'
const HashTag = props => (
  <Badge size="md" color="primary" className="mr-1">
    {props.title}
  </Badge>
)

const generateHash = list => {
  return list.map(({ title }) => <HashTag title={title} key={title} />)
}

const PlayerDiscription = ({ title, uploader, hashList, viewCount }) => {
  return (
    <div className="PlayerDiscription p-4 mt-3 mb-3 mb-md-0">
      {generateHash(hashList)}
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="mt-2">{title}</h5>
          <span>{uploader}</span>
        </div>
        <div className="d-flex flex-column-reverse">
          <span>조회수 {viewCount} 회</span>
        </div>
      </div>

      <style jsx>{`
        .PlayerDiscription {
          height: 150px;
          border: 1px solid rgb(231, 232, 239);
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  )
}
export default PlayerDiscription
