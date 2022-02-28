import React, { Fragment, useState } from "react";
import { DownOutlined } from "../../utils/icons";
import "./style.css";
export default function Index() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className="side-menu"
        onClick={() => {
          console.log(111);
          setShow(!show);
        }}
      >
        <div>
          <section className="left-titile">
            {11111}
            {2222}
          </section>
          <Fragment>
            <DownOutlined />
          </Fragment>
        </div>
      </div>
      <div className="side-menu">
        <div
          style={{
            marginLeft: 12,
            height: !show ? 0 : "initial",
            padding: !show ? 0 : 10,
            overflow: !show ? "hidden" : "visible",
          }}
        >
          <section className="left-titile">
            {11111}
            {2222}
          </section>
        </div>
      </div>
      <div className="side-menu">
        <div
          style={{
            marginLeft: 12,
            height: !show ? 0 : "initial",
            padding: !show ? 0 : 10,
            overflow: !show ? "hidden" : "visible",
          }}
        >
          <section className="left-titile">
            {11111}
            {2222}
          </section>
        </div>
      </div>
    </div>
  );
}
