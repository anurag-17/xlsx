import React, { useEffect, useState } from "react";
import axios from "axios";

import { SideNavigation } from "./SideNavigation";
import "./viewlist.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../action/useraction";
import { Header } from "./Header";
export const Finalfilter = () => {
    const { user, isAuthenticated, res, error, loading } = useSelector(
        (state) => state.user
      );
      const dispatch =useDispatch()
      const navigate = useNavigate();
      const [filter, setfilter] = useState("");
        const [filterdata, setfilterdata] = useState([]);
      const [finalsgid, setfinalsgid] = useState();
    
      if (isAuthenticated === false) {
        navigate("/");
      }
      if(user.role==="user"){
        dispatch(logout())
        navigate("/employeelogin")
      }
      const handle = (e) => {
        setfilterdata("")
        console.log(e.target.value);
        setfilter(e.target.value)
        // setfilterdata()
      };
      console.log(filter);
      let district = "";
      const searchdistrict = async (e) => {
        district = e.target.value;
        console.log(district);
        const res = await axios.post(
          "/api/auth/slumidsearch",
          {
            Name_of_the_District: district,
          }
        );
        setfilterdata(res.data);
      };
      let ulb = "";
      const searchulb = async (e) => {
        ulb = e.target.value;
        console.log(ulb);
        const res = await axios.post(
          "/api/auth/slumidsearch",
          {
            Name_of_ulb: ulb,
          }
        );
        setfilterdata(res.data);
      };
      let Tlf_Name = "";
      const searchtlf = async (e) => {
        Tlf_Name = e.target.value;
        console.log(Tlf_Name);
        const res = await axios.post(
          "/api/auth/slumidsearch",
          {
            TLF_NAME: Tlf_Name,
          }
        );
        setfilterdata(res.data);
      };
      let Slf_Name = "";
      const searchSlfName = async (e) => {
        Slf_Name = e.target.value;
        console.log(Slf_Name);
        const res = await axios.post(
          "/api/auth/slumidsearch",
          {
            SLF_NAME: Slf_Name,
          }
        );
        setfilterdata(res.data);
      };
      let SHG = "";
      const searchSHG = async (e) => {
        SHG = e.target.value;
        console.log(SHG);
        const res = await axios.post(
          "/api/auth/slumidsearch",
          {
            sghid: SHG,
          }
        );
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
                  const rooo = Object.keys(filterdata[0]).filter((item, index) => {
                    // console. log(item);
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
    
  return    <div>
  <Header/>
  <SideNavigation />
  <div className="AddFlex">
    <div style={{ width: "70%", marginLeft: "23%",marginTop:"10%" }}>
      <select
      style={{width:"50%"}}
        onChange={handle}
        className="form-select form-select-lg mb-3"
        aria-label="Default select example"
      >
        <option className="option" selected disabled>
          Filter
        </option>
        <option className="option">District</option>
        <option>ulb</option>
        <option>Tlf Name</option>
        <option>Slf Name</option>
        <option>SHG ID</option>
      </select>

     {filter==="District"?(<> <div className="formgroup">
        <label htmlFor="district">District</label>
        <input onChange={searchdistrict} className="district" />
      </div></>):("")}
   {filter==="ulb"?(<>   <div className="formgroup">
        <label htmlFor="muncipalty">Ulb</label>
        <input onChange={searchulb} className="muncipalty" id="muncipalty" />
      </div></>):("")}
     {filter==="Tlf Name"?(<> <div className="formgroup">
        <label htmlFor="wardno">Tlf Name</label>
        <input onChange={searchtlf} className="wardno" id="wardno" />
      </div></>):("")}
    
    {filter==="Slf Name"?(<>  <div className="formgroup">
        <label htmlFor="slfname">SLF name</label>
        <input
          onChange={searchSlfName}
          className="slfname"
          id="slfname"
        />
      </div></>):("")}
    {filter==="SHG ID"?(<>  <div className="formgroup">
        <label htmlFor="SHG">SHG ID</label>
        <input
          onChange={searchSHG}
          className="SHG"
          id="SHG"
        />
      </div></>):("")}

      <div style={{ width: "100%" }}>
        {filterdata.length >=1 ? (
          <>
            <div
              style={{ overflow: "scroll" }}
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
};
