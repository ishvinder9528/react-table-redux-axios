import React, { useMemo, useEffect ,useState} from "react";
import { useTable } from "react-table/dist/react-table.development";
// import MOCK_DATA from "./data.js";
import {COLUMNS} from "./columns.js";
import "./table.css";
import axios from "axios";

const BasicTable = () => {
  const [datas, setDatas] = useState([]);
  // const [finalData, setFinalData] = useState([]);
  useEffect(() => {
    const data = getData()
  },[]);
 

  const getData = async () => {
    const newData = await axios.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
    setDatas(newData.data);
    return setDatas;

  };
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => datas, [datas]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((group) => (
          <tr {...group.getHeaderGroupProps()}>
            {group.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
   
    </table>
  );
};

export default BasicTable;
