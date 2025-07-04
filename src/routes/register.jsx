import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const registerSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/member/register', {
        username,
        password,
        displayName
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true // 쿠키를 서버와 함께 자동으로 전송
      });

      console.log(response.data); // JWT 토큰 또는 응답 메시지 출력

      navigate('/');
    } catch (error) {
      console.error('register failed:', error.response?.data || error.message);
    }
  };

  

  return (
    <div>
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        name="displayName"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="DisplayName"
      />
      <button onClick={registerSubmit}>회원가입</button>
    </div>
  );
}
export default Register;
