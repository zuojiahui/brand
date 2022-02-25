import React, { Fragment, useState, useMemo,useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, BellOutlined, Cloud, DownOutlined } from "../../utils/icons";
import { routers } from "../../routes";
import "./style.css";
export default function Index() {
  // 控制搜索框宽度
  const [wide, setWide] = useState("");
  // 页面信息
  const [pageInfo, setPageInfo] = useState({});
  // 切换主题
  const changeTheme = () => document.body.classList.toggle("light-mode");
  //   输入框获取焦点事件
  const inputOnFocus = () => setWide("wide");
  //   输入失去取焦点事件
  const inputOnBlur = () => setWide("");
  // 获取所有 BasicLayout 组件所需路由
  const routerList = () => {
    const list = routers.filter((item) => item?.path === "/");
    if (list.length > 0 && list[0]?.children) return list[0].children;
    return [];
  };
  // 📃 显示右侧对应路由页面
  const changeContainer = (page) => setPageInfo(page);

  // 👉 右侧显示内容
  const container = useMemo(() => {
    return (
      <div className="main-container">
        <div className="content-wrapper">{pageInfo?.element}</div>
      </div>
    );
  }, [pageInfo]);

  useEffect(()=>{},[])
  return (
    <div className="theme">
      {/* 背景区域 */}
      <div className="video-bg">
        <video width="320" height="240" autoPlay loop muted>
          <source
            src="https://assets.codepen.io/3364143/7btrrd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="dark-light" onClick={changeTheme}>
        <Moon />
      </div>
      {/* 主体区域 */}
      <div className="app">
        <div className={`header ` + wide}>
          <div className="menu-circle"></div>
          <div className="header-menu"></div>
          <div className="search-bar">
            <input type="text" onFocus={inputOnFocus} onBlur={inputOnBlur} />
          </div>
          <div className="header-profile">
            <div className="notification">
              <span className="notification-number">3</span>
              <BellOutlined />
            </div>
            <Cloud />
            <img
              className="profile-img"
              src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="wrapper">
          <div className="left-side">
            <div className="side-menu">
              {routerList().map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    key={index}
                    onClick={() => changeContainer(item)}
                  >
                    <div className="left-titile">
                      {item?.icon}
                      {item?.name}
                    </div>
                    <Fragment>
                      {Array.isArray(item?.children) &&
                        item.children.length > 0 && <DownOutlined />}
                    </Fragment>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* 内容区域 */}
          {container}
        </div>
      </div>
    </div>
  );
}
