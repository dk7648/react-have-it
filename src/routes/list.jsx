import Card from "../components/Card.jsx";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./slider.css"
import habitDatas from "../data/habitDatas.js";

function List(props) {
    let [habits] = useState(habitDatas);
  return (
    <div>


      <h4>최근 추가된 습관들</h4>
      <Container className="card-container">
        <Row>
          {habits.map((target, i) => {
            return (
              <>
                <Card navigate={props.navigate} key={i} item={target} />
              </>
            );
          })}
        </Row>
      </Container>
      <h4>최근 작성된 후기들</h4>

      
    </div>
  );
}

export default List;
