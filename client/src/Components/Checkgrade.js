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
  let slumid = "";
  const searchslumid = async (e) => {
    slumid = e.target.value;
    console.log(slumid);
    const res = await axios.post("http://localhost:5000/api/auth/slumidsearch", {
      "Slum_Id":slumid,
    });
    setfilterdata(res.data);
   
  };
  let ward_Name=""
  const wardnumber = async (e) => {
    ward_Name = e.target.value;
    console.log(ward_Name);
    const res = await axios.post("http://localhost:5000/api/auth/slumidsearch", {
      "ward_Name":ward_Name,
    });
    setfilterdata(res.data);
   
  };
  let districtname=""
  const searchdistrictname = async (e) => {
    districtname = e.target.value;
    console.log(districtname);
    const res = await axios.post("http://localhost:5000/api/auth/slumidsearch", {
      "Name_of_the_District":districtname,
    });
    setfilterdata(res.data);
   
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
          <input onChange={searchslumid} className="slumid" />
          </div>
          <div className="formgroup">
            <label htmlFor="muncipalty">muncipalty</label>
            <input  className="muncipalty" id="muncipalty" />
          </div>
          <div className="formgroup">
            <label htmlFor="wardno">ward no</label>
            <input onChange={wardnumber} className="wardno" id="wardno" />
          </div>
          <div className="formgroup">
            <label htmlFor="district">district</label>
            <input onChange={searchdistrictname}className="district" id="district" />
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
