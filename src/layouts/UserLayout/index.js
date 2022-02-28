import React from "react";
import { useNavigate } from "react-router-dom";
import image from "./background.jpg";
import "./style.css";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="left">
        <div className="animation outBox">
          <div className="header">
            <h2 className="animation a1">欢迎回来 ！</h2>
          </div>
          <div className="form">
            <input
              type="email"
              className="form-field animation a2"
              placeholder="账号"
            />
            <input
              type="password"
              className="form-field animation a3"
              placeholder="密码"
            />
            <button className="animation a4" onClick={() => navigate("/")}>
              登录
            </button>
          </div>
        </div>
      </div>
      <div className="right" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  );
};
export default Login;
