import React, { useState, useEffect } from "react";
import "./style.css";
export default function Index(props) {
  const { current = 1, onChange, total = 0 } = props;
  const [isChange, serIsChange] = useState(false);
  const [activeState, setActiveState] = useState(current);
  const [termList] = useState(() =>
    Array.from({ length: Number(total) }).map((_, index) => index + 1)
  );
  useEffect(() => {
    if (isChange) {
      onChange && onChange(activeState);
    }
  }, [onChange, activeState, isChange]);
  // 切换页数
  const changePage = (tyep, item) => {
    serIsChange(true);
    // 上一页
    if (tyep === "prev") {
      if (activeState - 1) setActiveState(activeState - 1);
      return;
    }
    // 下一页
    if (tyep === "next") {
      if (activeState - 1 !== termList.length - 1)
        setActiveState(activeState + 1);
      return;
    }
    // 下 5 页
    if (item === "next") {
      if (activeState + 5 > termList[termList.length - 1]) {
        setActiveState(termList[termList.length - 1]);
        return;
      }
      setActiveState(activeState + 5);
      return;
    }
    // 上 5 页
    if (item === "prev") {
      if (activeState - 5 <= 0) {
        setActiveState(1);
        return;
      }
      setActiveState(activeState - 5);
      return;
    }
    // 点击页数切换
    setActiveState(item);
  };
  // 展示数据
  const termLi = () => {
    if (termList.length === 0) return [];
    const newTermList = termList.slice(
      activeState > termList[termList.length - 5]
        ? termList[termList.length - 6]
        : activeState >= 5
        ? activeState - 2
        : activeState < 5
        ? 0
        : activeState,
      activeState > termList[termList.length - 5]
        ? termList[termList.length - 1]
        : activeState < 5
        ? 5
        : activeState + 1
    );
    // 前位添加
    if (!newTermList.includes(1)) newTermList.unshift(1, "prev");

    // 后位添加
    if (!newTermList.includes(termList[termList.length - 1]))
      newTermList.push("next", termList[termList.length - 1]);

    return newTermList;
  };
  return (
    <ul className="pagination modal-5">
      <li onClick={() => changePage("prev")}>
        <span className="prev fa fa-arrow-left">prev</span>
      </li>
      {termLi().map((item) => {
        return (
          <li key={item} onClick={async () => changePage("onClick", item)}>
            <span className={activeState === item ? "active" : ""}>
              {typeof item === "string" ? "•••" : item}
            </span>
          </li>
        );
      })}
      <li onClick={() => changePage("next")}>
        <span className="next fa fa-arrow-right">next</span>
      </li>
    </ul>
  );
}
