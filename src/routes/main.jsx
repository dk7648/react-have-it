import Card from "../components/Card.jsx";
import { Container, Row } from "react-bootstrap";
import "./slider.css"

import Slider from "react-slick";
import Star from "../components/star.jsx";
function Main(props) {
    const settings = {
        dots: true, // 원형 네비게이션 표시
        infinite: true, // 무한 슬라이드
        speed: 500, // 슬라이드 이동 속도 (500ms)
        slidesToShow: 3, // 한 번에 보여줄 카드 개수
        slidesToScroll: 1, // 한 번에 스크롤될 카드 개수
        arrows: true, // 좌우 화살표 표시
        nextArrow: <div className="slick-next">➡</div>, // 오른쪽 화살표 커스터마이징
        prevArrow: <div className="slick-prev">⬅</div>, // 왼쪽 화살표 커스터마이징
        responsive: [
          {
            breakpoint: 768, // 화면 크기가 768px 이하일 때
            settings: {
              slidesToShow: 1, // 모바일에서는 한 번에 한 개 카드만
              slidesToScroll: 1
            }
          }
        ]
      };
      
    console.log(props.items);
  return (
    <div>
      <div className="notice-slider-wrapper">
        <Slider {...settings}>
          {props.notices.map((item) => (
            <div className="notice-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="notice-content">
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <h4>최근 추가된 습관들</h4>
      <Container>
        <Row>
          {props.habits.slice(-6).map((target, i) => {
            return (
              <>
                <Card navigate={props.navigate} key={i} item={target} />
              </>
            );
          })}
        </Row>
      </Container>
      <h4>최근 작성된 후기들</h4>

      <div className="comment-wrapper"> 
        {props.comments.slice(-4).map((item) => (
          <div className="comment">
            <Star rating={item.rating} />
            <h5>{item.author}</h5>
            <p>{item.content}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Main;
