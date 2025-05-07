import { useState } from "react";
import userData from "../data/userData.js";
function MyPage() {
    let [user] = useState(userData);
    console.log(user)
    return (
      <div className="container">
        <h4>유저 정보</h4>
        <hr/>
        <h5>{user.id}</h5>
        <h5>{user.displayName}</h5>
        <br/><br/>
        <h4>나의 Have it 리스트</h4>
        <hr/>
      </div>
    );
}
export default MyPage;