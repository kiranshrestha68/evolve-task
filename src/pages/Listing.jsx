import React, { useState } from "react";
import "./Listing.css";
import back from "../assets/back.png";
import refresh from "../assets/refresh.png";
import bin from "../assets/bin.png";

import data from "./data";

const Listing = () => {
  const [showfilter, setShowfilter] = useState(false);

  //   const [val, setVal] = useState([]);
  const [inputList, setinputList] = useState([
    { select_header: "", condition2: "", input: "" },
  ]);

  //   console.log(inputList, "hello")

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleSubmit = () => {
    console.log(inputList, "hello");
  };

  const handleClick = () => {
    // const abc = [...inputList, []];
    // setinputList(abc);

    setinputList([
      ...inputList,
      { condition1: "", select_header: "", condition2: "", input: "" },
    ]);
  };

  const handleDelete = (index) => {
    alert(index);
    let list = [...inputList];

    console.log(list, "hello list")

    list.splice(index, 1);
    setinputList(list);
  };

  return (
    <>
      <div>
        <button onClick={() => setShowfilter(true)}> filter</button>
      </div>
      {showfilter ? (
        <div className="showfilter__main">
          <div className="filter__header">
            <div className="filter__advance">
              <img src={back} alt="back" onClick={() => setShowfilter(false)} />
              <span> Advanced filter </span>
            </div>
            <img src={refresh} alt="refresh" />
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
                      {i === 0 ? <div> where</div>:null  }
                      <select
                        name="select_header"
                        onChange={(e) => handleInputChange(e, i)}
                      >
                        <option value="name"> Name</option>
                        <option value="salary"> Salary</option>
                        <option value="phone"> Phone</option>
                        <option value="position"> Position</option>
                      </select>
                      <select
                        name="condition2"
                        onChange={(e) => handleInputChange(e, i)}
                      >
                        <option value="=="> equals</option>
                        <option value=">="> greater </option>
                        <option value="<="> less </option>
                      </select>
                      <input
                        name="input"
                        onChange={(e) => handleInputChange(e, i)}
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
                        <option value="name"> Name</option>
                        <option value="salary"> Salary</option>
                        <option value="phone"> Phone</option>
                        <option value="position"> Position</option>
                      </select>

                      <select
                        name="condition2"
                        onChange={(e) => handleInputChange(e, i)}
                      >
                        <option value="="> equals</option>
                        <option value=">="> greater </option>
                        <option value="<="> less </option>
                      </select>
                      <input
                        name="input"
                        onChange={(e) => handleInputChange(e, i)}
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

            <button onClick={() => handleClick()}> + Add Condition</button>
            <button onClick={() => handleSubmit()}> Filter</button>
          </div>
        </div>
      ) : null}
      <table class="table">
        <thead className="tablecolor">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Phone</th>
            <th scope="col">Position</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr>
              <td>{d.full_name}</td>
              <td className="text-primary">{d.salary}</td>
              <td className="text-primary">{d.phone}</td>
              <td className="text-primary">{d.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Listing;
