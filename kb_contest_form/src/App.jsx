import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import logo from "./imgages/logo.png";

const App = () => {
  const [values, setValues] = useState({
    userID: "",
    type: "",
    count: "",
  });

  const inputs = [
    {
      id: 1,
      name: "아이디",
      type: "text",
      placeholder: "사용자의 아이디",
      errorMessage: "아이디 형식이 아닙니다.",
      label: "아이디",
      //required: true,
    },
    {
      id: 2,
      name: "약의 종류",
      type: "text",
      placeholder: "약의 종류",
      errorMessage: "약의 종류가 아닙니다.",
      label: "약의 종류",
      //required: true,
    },
    {
      id: 3,
      name: "약의 개수",
      type: "number",
      placeholder: "약의 개수",
      errorMessage: "숫자가 아닙니다.",
      label: "약의 개수",
      //required: true,
    },
    {
      id: 4,
      name: "반납 일자",
      type: "date",
      placeholder: "반납 일자",
      errorMessage: "날짜 형태가 아닙니다. ",
      label: "반납 일자",
      // required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <nav class="navbar">
        <div class="navbar__logo">
          <img src={logo} alt="LOGO" />
        </div>
        <ul class="navbar__menu">
          <li>
            <a href=""> Home </a>
          </li>
          <li>
            <a href=""> About </a>
          </li>
        </ul>
        <div class="navbar__icons">
          <li>
            <a href=""> 로그인 </a>
          </li>
          <li>
            <a href=""> 회원가입 </a>
          </li>
        </div>
      </nav>
      <div className="down">
        <form onSubmit={handleSubmit}>
          <h1> 반납 정보입력 </h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <p>
            <button1>취소</button1> <button2>제출</button2>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
