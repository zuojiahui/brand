import React, { Fragment } from "react";
import "./style.css";
export default function Index(props) {
  const { columns = [], dataSource = [], rowKey = "" } = props;
  return (
    <Fragment>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              {(Array.isArray(columns) ? columns : columns()).map((item) => (
                <th
                  key={item?.dataIndex}
                  style={{ textAlign: item?.align || "center" }}
                >
                  {item?.title}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {dataSource.map((item, index) => {
              return (
                <tr key={item[rowKey]}>
                  {(Array.isArray(columns) ? columns : columns()).map((val) => (
                    <td key={val?.dataIndex}>
                      <div
                        className="styleAlign"
                        style={{
                          justifyContent:
                            val?.align === "left"
                              ? "flex-start"
                              : val?.align === "right"
                              ? "flex-end"
                              : "center",
                        }}
                      >
                        {(val?.render &&
                          val?.render(
                            item[val?.dataIndex] || "",
                            item,
                            index
                          )) ||
                          item[val?.dataIndex] ||
                          ""}
                      </div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
