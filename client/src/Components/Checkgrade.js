import React, { useEffect, useState } from "react";
import axios from "axios";

import { SideNavigation } from "./SideNavigation";
import "./viewlist.css";

export const Checkgrade = () => {
  const [district, setdistrict] = useState("");
  const [ward, setward] = useState("");
  const [muci, setmuci] = useState("");
  const [slum, setslum] = useState("");
  const [filterdata, setfilterdata] = useState([]);
 const [finalsgid, setfinalsgid] = useState()

  const handle = (e) => {
    console.log(e.target.value);
  };
  let SHGID = "";
  const searchSHG = async (e) => {
    SHGID = e.target.value;
    console.log(SHGID);
    const res = await axios.post("http://localhost:5000/api/auth/sghidsearch", {
      "Slum Id":SHGID,
    });
    setfilterdata(res.data);
    const re = await axios.post("http://localhost:5000/api/auth/finddata");
    setfinalsgid(re.data)
  };
  console.log(filterdata);
  console.log(finalsgid);
  const fmap = () => {
    try {
      // console.log(data);
      const ffmap = filterdata.map((row, index) => {
        // console.log(row["SHG ID"]);
        return (
          // {Object}.key(filterdata[0]),
          <tr>
            {Object.keys(filterdata[0]).map((key, index) => {
// console.log(row["SHG ID"]);
const rooo= Object.keys(filterdata[0]).filter((item,index)=>{
  console.log(item);
});
              return <td>{row[key]}</td>;
            })}
          </tr>
        );
      });
      return ffmap;
    } catch (error) {
      console.log(error);
    }
  };
  const hmap = () => {
    try {
      const hhmap = Object.keys(filterdata[0]).map((heading) => {
        // console.log(heading);
        return <th>{heading}</th>;
      });
      return hhmap;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <SideNavigation />
      <div className="AddFlex">
        <div style={{ width: "100%", marginLeft: "23%" }}>
          <select onChange={handle} className="select">
            <option className="option">district</option>
            <option>muciplaty</option>
            <option>ward no</option>
            <option>slum id</option>
          </select>
          <div className="formgroup">
            <label htmlFor="slumid">slumid</label>
          <input onChange={searchSHG} className="slumid" />
          </div>
          <div className="formgroup">
            <label htmlFor="muncipalty">muncipalty</label>
            <input className="muncipalty" id="muncipalty" />
          </div>
          <div className="formgroup">
            <label htmlFor="wardno">ward no</label>
            <input className="wardno" id="wardno" />
          </div>
          <div className="formgroup">
            <label htmlFor="district">district</label>
            <input className="district" id="district" />
          </div>

          <div style={{ width: "100%" }}>
            {filterdata !== 1 ? (
              <>
                <div
                  style={{ overflow: "scroll", width: "70%" }}
                  className="table-responsive"
                >
                  <table className="table" responsive="true">
                  <thead>
                    <tr>{hmap()}</tr>
                  </thead>
                  <tbody>{fmap()}</tbody>
                </table>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
