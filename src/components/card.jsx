import { Col, Nav } from "react-bootstrap";
function Card(props) {
    return (
      <div className="temp">
        <Nav.Link href={"/habit/detail/" + props.item.id}>
          <img
            src={"https://codingapple1.github.io/shop/shoes1.jpg"}
            width="80%"
          />
          <h4>제목: {props.item.title}</h4>
        </Nav.Link>
        <p>내용: {props.item.content}</p>
        <p>레벨: {props.item.level}</p>
        <p>빈도: {props.item.frequency}</p>
      </div>
    );
  }

  export default Card;