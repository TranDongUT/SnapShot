import { useState } from "react";
import { Form } from "react-bootstrap";
import style from "./style/loginStyle.module.scss";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const check = () => {
    if (userName === "voxuanhieu") {
      if (password === "123") {
        alert(`Hello ${userName}`);
        setIsLogin(true);
      }
    } else {
      alert("invalid");
    }
  };

  console.log(isLogin);
  return (
    <div className={style.from}>
      {isLogin ? (
        <div>{userName}</div>
      ) : (
        <>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Your Username"
            className={isLogin ? style.hideInput : style.inputField}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your Password"
            className={isLogin ? style.hideInput : style.inputField}
          />
          <button
            className={isLogin ? style.hideInput : style.inputField}
            onClick={() => check()}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default LoginForm;
