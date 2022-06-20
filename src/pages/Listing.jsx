import React, { useState } from "react";
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

const Listing = () => {
  const [showfilter, setShowfilter] = useState(false);
  const [selectHeader, setSelectHeader] = useState("");
  const [_input, setInput] = useState("");
  const [_condition2, setCondition2] = useState();

  // console.log(selectHeader, "hello input track");
  // console.log(selectHeader, "selectheader from dstate");

  //   const [val, setVal] = useState([]);
  const [inputList, setinputList] = useState([
    { condition1: "", select_header: "", condition2: "", input: "" },
  ]);

  //   console.log(inputList, "hello")
  // console.log({ filteredData });
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    // console.log(list, "list ");
    setinputList(list);

    let select_header = JSON.stringify(inputList.map((l) => l.select_header));

    let conditon1 = JSON.stringify(inputList.map((l) => l.condition1));
    let condition2 = JSON.stringify(inputList.map((l) => l.condition2));
  };

  // const selectHeaderr = () => {
  //   setSelectHeader(select_header);
  // }

  const handleSubmit = (e) => {
    console.log(inputList, "inputlist");
    // // let kiran = inputList.find((l) => l.select_header == 'salary').select_header;
    // // let input = JSON.stringify( inputList.map((i) => i.input));
    // // console.log((JSON.stringify(input), "Input")
    // // console.log(salary, 'salary')
    // // console.log(test, "test")
    // let select_header = JSON.stringify(inputList.map((l) => l.select_header));

    // if (select_header === "salary") {
    //   const filteredData = data.filter(
    //     (d) => d.salary == inputList.map((i) => i.input)
    //   );
    //   console.log(filteredData, "filterdata")
    // }
  };

  const handleClick = () => {
    // const abc = [...inputList, []];
    // setinputList(abc);

    setinputList([
      ...inputList,
      { condition1: "", select_header: "", condition2: "", input: "" },
    ]);
    // const allFruits = Object.assign({}, ...fruits);
    // const _inputList = Object.assign({}, ...inputList);
    // console.log(_inputList.condition2, "change");

    // let select_header = JSON.stringify(inputList.map((l) => l.select_header));
    // let conditon1 = JSON.stringify(inputList.map((l) => l.condition1));
    // let condition2 = JSON.stringify(inputList.map((l) => l.condition2));
    // // console.log({condition2}  )

    // if (_inputList.select_header == "salary") {
    //   var a = data.filter((d) => d._inputList == inputList.map((i) => i.input));
    //   console.log(a, "hllo a");
    // } else {
    //   return;
    // }

    // const filteredData = data.filter(
    //   (d) => d._inputList == inputList.map((i) => i.input)
    // );
    // console.log(filteredData, "filterdata");

    // if (selectHeader == "salary") {
    //   const filterdata = data.filter((d) => d.salary == _input);
    //   console.log(filterdata, "data fileter");
    // } else if (selectHeader == "phone") {
    //   const filterdata = data.filter((d) => d.phone == _input);
    //   console.log(filterdata, "data fileter");
    // } else if (selectHeader == "full_name") {
    //   const filterdata = data.filter((d) => d.full_name == _input);
    //   console.log(filterdata, "data fileter");
    // } else if (selectHeader == "position") {
    //   const filterdata = data.filter((d) => d.position == _input);
    //   console.log(filterdata, "data fileter");
    // }
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
      <div className="topbar">
        {/* <button onClick={() => setShowfilter(true)}> filter</button>
         */}
        <div className="topbar__col1">
          {" "}
          <span> 1,520 out of 1,994 outlets</span>
        </div>

        <div className="topbar__col2">
          <div>
            <img
              src={filter}
              alt="filter"
              onClick={() => setShowfilter(true)}
            />{" "}
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
                        {i === 0 ? <div> where</div> : null}
                        <select
                          name="select_header"
                          onChange={(e) => {
                            handleInputChange(e, i);
                            setSelectHeader(e.target.value);
                          }}
                        >
                          <option value="full_name"> Name</option>
                          <option value="salary"> Salary</option>
                          <option value="phone"> Phone</option>
                          <option value="position"> Position</option>
                        </select>
                        <select
                          name="condition2"
                          onChange={(e) => {
                            handleInputChange(e, i);
                            setCondition2(e.target.value);
                          }}
                        >
                          <option value="=="> equals</option>
                          <option value=">="> greater </option>
                          <option value="<="> less </option>
                        </select>
                        <input
                          name="input"
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
            {data.map((d) => (
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
      </div>
    </>
  );
};

export default Listing;
