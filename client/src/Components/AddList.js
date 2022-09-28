import React, { useState } from "react";
import { SideNavigation } from "./SideNavigation";
import "./AddList.css";
import axios from "axios";
import { Header } from "./Header";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const AddList = () => {
  const [selectedfile, setselectedfile] = useState();
  const { user, isAuthenticated, loading} = useSelector((state) =>state.user);
  const navigate=useNavigate()
if(isAuthenticated===false){
  navigate("/")
}
  const handlesubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    console.log(selectedfile);
    formdata.append("xlsx", selectedfile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      "http://localhost:5000/upload",
      formdata,
      config
    );
    console.log(res.data);
  };
  return (
    <>
      <Header/>

      <div className="AddFlex">
        <SideNavigation />
        <div style={{    margin:"5% auto auto"}}>
          <form onSubmit={handlesubmit} action="">
            <input
              type="file"
              onChange={(e) => setselectedfile(e.target.files[0])}
            />
            <input type="submit" value="Upload" />
          </form>
        </div>
      </div>
    </>
  );
};
