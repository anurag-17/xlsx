import React, { useEffect, useState } from "react";
import axios from "axios";

import { SideNavigation } from "./SideNavigation";
import"./viewlist.css"

export const Checkgrade = () => {
    const [district, setdistrict] = useState("");
    const [ward, setward] = useState("");
    const [muci, setmuci] = useState("");
    const [slum, setslum] = useState("");
    const [filterdata, setfilterdata] = useState([  ]);
    
  const handle=(e)=>{
console.log(e.target.value);
  }
  let SHGID = "";
  const searchSHG = async (e) => {
    SHGID = e.target.value;
    console.log(SHGID);
    const res = await axios.post("http://localhost:5000/api/auth/sghidsearch", {
      SHGID,
    });
    setfilterdata([res.data]);

}
console.log(filterdata);
const fmap = () => {
    try {
        console.log(filterdata);
      // console.log(data);
      const ffmap = filterdata.map((row, index) => {
        console.log(row);
        return (
          <tr>
            {Object.keys(filterdata[0]).map((key, index) => {
              // console.log(row[key]);
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
        console.log(heading);
        return <th>{heading}</th>;
      });
      return hhmap;
    } catch (error) {
      console.log(error);
    }
  };
  const hhmap = () => {
    console.log(filterdata);
    try {
      const hhmap = Object.keys(filterdata[0]).map((heading) => {
        console.log(heading);
        {heading.map((head)=>{
            console.log(head);
        })  }
      });
      return hhmap;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <SideNavigation/>
   <div className="AddFlex">
        <div style={{width:"100%",marginLeft:"45%"}}>
          <select onChange={handle}className="select">
            <option  className="option">district</option>
            <option>muciplaty</option>
            <option>ward no</option>
            <option>slum id</option>
          </select>
          <input  onChange={searchSHG} className="slumid"/>
          <input className="muncipalty"/>
          <input className="wardno"/>
          <input className="district"/>


          <div style={{width:"100%"}}>
          {filterdata!==1 ? (
            <>
              <div
                style={{ overflow: "scroll", width: "70%", margin: "0 21%" }}
                className="table-responsive"
              >
                <table className="table" responsive="true">
                  <thead>
                    <tr>{hmap()}</tr>
                  <tr>{hhmap()}</tr>   
                  </thead>
                  {/* <tbody>{fmap()}</tbody> */}   
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
