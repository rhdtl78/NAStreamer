import { Card } from 'reactstrap'

const CardListLow = props => {
    return(
    <Card className="flex-col">
      <img className="VideoListCard__img" src={props.imgSrc} />
      <div className="VideoListCard__content pl-2">
        <span>{props.videoName}</span>
        <br />
        <small>{props.uploader}</small>
      </div>
      <style jsx>{`
        .card{
          margin:0.2rem;
        }
        .VideoListCard__img {
          width: 100%;
          height: 130px;
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
export default CardListLow