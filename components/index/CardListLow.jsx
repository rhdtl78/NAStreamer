import { Card, Col, CardBody, CardTitle, CardImg, CardText } from 'reactstrap'

const CardListLow = props => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" xl="3">
      <Card>
        <CardImg top witdh='100%' src={props.imgSrc} />
        <CardBody>
          <CardTitle>
            <span>{props.videoName}</span>
          </CardTitle>
          <CardText>
            <small>{props.uploader}</small>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  )
}
export default CardListLow
