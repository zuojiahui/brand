import React, { Fragment } from "react";
import "./style.css";
export default function Index(props) {
  /*
  columns: 表格列               object[]  || function
  dataSource: 表格行数据         object[]
  rowKey： 表格行 key 的取值      string
  */
  const { columns = [], dataSource = [], rowKey = "" } = props;
  return (
    <Fragment>
      {/* 表格列 */}
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
      {/* 表格行*/}
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
