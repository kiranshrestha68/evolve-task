import React, { useState, useEffect } from "react";
import "./Listing.css";
import back from "../assets/back.png";
import icon from "../assets/icon.svg";
import filter from "../assets/filter.svg";
import search from "../assets/search.svg";
import cone from "../assets/cone.svg";
import download from "../assets/download.svg";

import refresh from "../assets/refresh.png";
import bin from "../assets/bin.png";

import data from "./data";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Listing = () => {
  const [showfilter, setShowfilter] = useState(false);
  const [selectHeader, setSelectHeader] = useState("");
  const [_input, setInput] = useState("");
  const [_condition2, setCondition2] = useState();
  const [datas, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, []);

  const [inputList, setinputList] = useState([
    { condition1: "", select_header: "", condition2: "", input: "" },
  ]);

  const clearField = () => {
    setSelectHeader("");
    setInput("");
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleSubmit = (e) => {
    console.log(inputList, "inputlist");

    if (selectHeader === "salary" && _condition2 === ">=") {
      const filterdata = data.filter((d) => d.salary >= _input);
      // console.log(filterdata, "data fileter");

      setData(filterdata);
      setShowfilter(false);
    } else if (selectHeader === "salary" && _condition2 === "==") {
      const filterdata = data.filter((d) => d.salary == _input);
      // console.log(filterdata, "data fileter");
      setData(filterdata);
      setShowfilter(false);
    } else if (selectHeader === "salary" && _condition2 === "<=") {
      const filterdata = data.filter((d) => d.salary <= _input);
      // console.log(filterdata, "data fileter");
      setData(filterdata);
      setShowfilter(false);
    } else if (selectHeader === "phone" && _condition2 === "==") {
      const filterdata = data.filter((d) => d.phone == _input);
      setData(filterdata);
      setShowfilter(false);
    } else if (selectHeader === "phone" && _condition2 === ">=") {
      toast("Not valid condition on phone", {
        position: "top-right",
        autoClose: 2000,
        type: "error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (selectHeader === "phone" && _condition2 === "<=") {
      toast("Not valid condition on phone", {
        position: "top-right",
        autoClose: 2000,
        type: "error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (selectHeader === "position" && _condition2 === "==") {
      const filterdata = data.filter((d) => d.position === _input);
      setData(filterdata);
      setShowfilter(false);
    } else if (selectHeader === "position" && _condition2 === "<=") {
      toast("Not valid condition on position", {
        position: "top-right",
        autoClose: 2000,
        type: "error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (selectHeader === "position" && _condition2 === ">=") {
      toast("Not valid condition on position", {
        position: "top-right",
        autoClose: 2000,
        type: "error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (selectHeader === "full_name" && _condition2 === "==") {
      const filterdata = data.filter((d) => d.full_name === _input);
      setData(filterdata);
      setShowfilter(false);
    } else if (selectHeader === "full_name" && _condition2 === "<=") {
      toast("Not valid condition on name", {
        position: "top-right",
        autoClose: 2000,
        type: "error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (selectHeader === "full_name" && _condition2 === ">=") {
      // alert("Not valid condition on name");
      toast("Not valid condition on name", {
        position: "top-center",
        autoClose: 2000,
        type: "error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleClick = () => {
    setinputList([
      ...inputList,
      { condition1: "", select_header: "", condition2: "", input: "" },
    ]);
  };

  const handleDelete = (index) => {
    // alert(index);
    let list = [...inputList];

    console.log(list, "hello list");

    list.splice(index, 1);
    setinputList(list);
  };

  return (
    <>
      <ToastContainer />

      <div className="topbar">
        <div className="topbar__col1">
          <span>
            {datas.length} out of {data.length} outlets
          </span>
        </div>

        <div className="topbar__col2">
          <div>
            <img
              src={filter}
              alt="filter"
              onClick={() => setShowfilter(true)}
            />
          </div>

          <div>
            <img src={icon} alt="icon" />
          </div>
        </div>
        <div className="topbar__col3">
          <img src={search} alt="icon" />
          <img src={cone} alt="filter" />
          <img src={download} alt="download" />
        </div>
      </div>

      <div className="listing__row2">
        {showfilter ? (
          <div className="showfilter__main">
            <div className="filter__header">
              <div className="filter__advance">
                <img
                  src={back}
                  alt="back"
                  onClick={() => setShowfilter(false)}
                />
                <span> Advanced filter </span>
              </div>
              <img src={refresh} alt="refresh" onClick={() => clearField()} />
            </div>

            <div className="container__main">
              {/* <div className="condition__container">
           <div> where</div>
           <select
             name="select_header"
             onChange={(e) => handleInputChange(e)}
           >
             <option value="name"> Name</option>
             <option value="salary"> Salary</option>
             <option value="phone"> Phone</option>
             <option value="position"> Position</option>
           </select>
           <select name="condition2" onChange={(e) => handleInputChange(e)}>
             <option value="=="> equals</option>
             <option value=">="> greater </option>
             <option value="<="> less </option>
           </select>
           <input />
         </div> */}

              {inputList.map((x, i) => {
                return (
                  <div className="dynamic__input">
                    {i === 0 ? (
                      <div className="condition__container">
                        {i === 0 ? <div> where</div> : null}
                        <select
                          name="select_header"
                          value={selectHeader}
                          onChange={(e) => {
                            handleInputChange(e, i);
                            setSelectHeader(e.target.value);
                          }}
                        >
                          <option value=""> -choose-</option>

                          <option value="full_name"> Name</option>
                          <option value="salary"> Salary</option>
                          <option value="phone"> Phone</option>
                          <option value="position"> Position</option>
                        </select>
                        <select
                          name="condition2"
                          value={_condition2}
                          onChange={(e) => {
                            handleInputChange(e, i);
                            setCondition2(e.target.value);
                          }}
                        >
                          <option value=""> -choose-</option>

                          <option value="=="> =</option>
                          <option value=">="> ≥ </option>
                          <option value="<="> ≤ </option>
                        </select>
                        <input
                          name="input"
                          value={_input}
                          onChange={(e) => {
                            handleInputChange(e, i);
                            setInput(e.target.value);
                          }}
                        />
                      </div>
                    ) : (
                      <div className="dynamic__input">
                        <select
                          name="condition1"
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option value="&&"> and</option>
                          <option value="||"> or</option>
                        </select>
                        <select
                          name="select_header"
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option value=""> -choose-</option>

                          <option value="name"> Name</option>
                          <option value="salary"> Salary</option>
                          <option value="phone"> Phone</option>
                          <option value="position"> Position</option>
                        </select>

                        <select
                          name="condition2"
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option value=""> -choose-</option>

                          <option value="=="> =</option>
                          <option value=">="> ≥ </option>
                          <option value="<="> ≤ </option>
                        </select>
                        <input
                          name="input"
                          onChange={(e) => {
                            handleInputChange(e, i);
                            setInput(e.target.value);
                          }}
                        />

                        {inputList.length !== 1 && (
                          <img
                            src={bin}
                            alt="bin"
                            onClick={() => handleDelete(i)}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="listing__button">
                <button onClick={() => handleClick()}> + Add Condition</button>
                <button onClick={() => handleSubmit()}> Filter</button>
              </div>
            </div>
          </div>
        ) : null}
        <table className="table ">
          <thead className="fw-bold">
            <tr className=" table-light text-secondary  ">
              <th scope="col">S.N.</th>

              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Phone</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody className="text-secondary fw-bold text-muted">
            {datas.map((d) => (
              <tr key={d.id}>
                <td>{d.id}.</td>

                <td>{d.full_name}</td>
                <td>{d.salary}</td>
                <td>{d.phone}</td>
                <td>{d.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {datas.length === 0 && <div className="noData"> No Data Found</div>}
      </div>
    </>
  );
};

export default Listing;
