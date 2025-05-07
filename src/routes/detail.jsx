import { useParams } from "react-router-dom";
import { Nav, Col} from "react-bootstrap";
import { useState } from "react";
import habitDatas from "../data/habitDatas.js";
import commentDatas from "../data/commentDatas.js";
import Star from "../components/star.jsx";
function Detail() {
    let { id } = useParams();
    let [habit] = useState(habitDatas[id]);
    let [comments] = useState(commentDatas.filter((element)=> {
        return element.habitId == id;
    }));
    return (
      <div className="container">
        <h4>{habit.title}</h4>
        <hr />
        <img
          src={"https://codingapple1.github.io/shop/shoes1.jpg"}
          width="80%"
        />
        <p>{habit.content}</p>
        <h4>Have it! 정보</h4>
        <hr />
        <p>레벨: {habit.level}</p>
        <p>빈도: {habit.frequency}</p>

        <div className="menu-list">
          <div>추천</div>
          <div>찜</div>
          <div>수정</div>
          <div>삭제</div>
          <div>목록</div>
        </div>

        <h4>댓글</h4>
        <hr />

        <div className="comment-wrapper">
          <div>
            {/* Todo: ajax POST요청으로 댓글 작성 기능 개발 */}
          </div>
          <div>
            {comments.map((item) => (
              <div className="comment">
                <Star rating={item.rating} />
                <h5>{item.author}</h5>
                <p>{item.content}</p>
                <p>{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Detail;
