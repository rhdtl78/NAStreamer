import { Card } from 'reactstrap'
const VideoListCard = props => {
  return (
    <Card className="flex-row">
      <img className="VideoListCard__img" src={props.imgSrc} />
      <div className="VideoListCard__content pl-2">
        <span>{props.videoName}</span>
        <br />
        <small>{props.uploader}</small>
      </div>
      <style jsx>{`
        .VideoListCard {
        }
        .VideoListCard__img {
          width: 168px;
          height: 94px;
        }
        .VideoListCard__content {
          width: 100%;
          padding: 1.25rem;
          font-size: 80%;
        }
      `}</style>
    </Card>
  )
}
export default VideoListCard
