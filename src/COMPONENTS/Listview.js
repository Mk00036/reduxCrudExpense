import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Modelpops from "./Modelpop";
import AddButton from "./Addbutton";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense } from "../redux/expenseSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./Search";

// Define style objects
const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    fontSize: "16px",
    color: "#333",
  },
  th: {
    padding: "12px",
    textAlign: "center",
    border: "1px solid #ddd",
    backgroundColor: "#303389", // Header background color
    color: "#fff", // Header text color
    fontWeight: "bold",
  },
  td: {
    padding: "12px",
    textAlign: "center",
    border: "1px solid #ddd",
  },
  thead: {
    backgroundColor: "#f4f4f4",
  },
  rowHover: {
    transition: "background-color 0.3s ease",
  },
  rowHoverEffect: {
    backgroundColor: "#f1f1f1", // Row hover background color
  },
  icon: {
    cursor: "pointer",
    margin: "0 5px",
    color: "#303389",
  },
};

const Listview = ({ expenseData, setExpenseData }) => {
  const [open, setOpen] = useState(true);
  const [edit, setEdit] = useState(1);
  const [getById, setGetById] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //redux data
  const dispatch = useDispatch();
  const reduxexpense = useSelector((state) => state.expense);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log("---Reduxdata--,", reduxexpense);
    console.log("--state data-- ", expenseData);
    return () => {
      console.log("Cleanup");
    };
  }, [reduxexpense]);

  if (!reduxexpense || reduxexpense.length === 0) {
    return <p>No data available</p>;
  }

  // Search functionality
  const filteredData = reduxexpense.filter((data) =>
    Object.values(data).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  
  // const filter = reduxexpense.filter((item) =>{
  //   Object.value(item)
  // })
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handelAddButton = () => {
    setGetById(false);
    setOpen(true);
  };

  const handelDelete = (index) => {
    dispatch(deleteExpense(index));
    toast.success("Success! Deleted");
  };

  const handelEdit = (index) => {
    console.log("0---------------------------------------------");
    console.log(expenseData[index]);
    setOpen(true);
    setGetById(true);
    setEdit(index);
  };

  const headers = Object.keys(reduxexpense[0]);

  return (
    <>
      <h1>Table View</h1>
      <AddButton handelAddButton={handelAddButton} />
      <Search onSearch={handleSearchChange} />
      <button onClick={()=>setSearchQuery("")} >
      Close
    </button>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            {headers.map((header, index) => (
              <th key={index} style={styles.th}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr
              key={index}
              style={styles.rowHover}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.rowHoverEffect.backgroundColor)
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              {headers.map((header, idx) => (
                <td key={idx} style={styles.td}>
                  {data[header]}
                </td>
              ))}
              <td style={styles.td}>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={styles.icon}
                  onClick={() => handelEdit(index)}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={styles.icon}
                  onClick={() => handelDelete(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {open && (
        <Modelpops
          open={open}
          handleClose={handleClose}
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          edit={edit}
          getById={getById}
        />
      )}
    </>
  );
};

export default Listview;
