import React, { useState } from "react";
import { SideNavigation } from "./SideNavigation";
import "./AddList.css";
import axios from "axios";
import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { LOader } from "./LOader";
import { useAlert } from "react-alert";
import { uploadsheet } from "../action/useraction";

export const AddList = () => {
  const [selectedfile, setselectedfile] = useState();
  const { user, isAuthenticated,res} = useSelector((state) =>state.user);
  const navigate=useNavigate()
  const [loading, setloading] = useState(false);
  const alert=useAlert()
  const dispatch=useDispatch()
if(isAuthenticated===false){
  navigate("/")
}
  const handlesubmit = async (e) => {
   try {
    e.preventDefault();
    const formdata = new FormData();
    console.log(selectedfile);
    formdata.append("xlsx", selectedfile);
    setloading(true)
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    // const res = await axios.post(
    //   "https://excelconvert.herokuapp.com/upload",
    //   formdata,
    //   {
    //     headers: {
    //     'Content-Type': "multipart/form-data"
    //     }
    //   }
    // );
    // console.log(res.data.success);
    dispatch(uploadsheet(formdata))
    if(res!==""  ){
      setloading(false)
      alert()

     
     
  
}
} catch (error) {
  alert.error(error.message)
  console.log(error);
  setloading(false)
   }
  };
console.log(loading);
  return (
    <>
      <Header/>

      <div className="AddFlex">
        <SideNavigation />
       {loading===true?(<LOader/>):(<>
        <div style={{    margin:"5% auto auto"}}>
          <form onSubmit={handlesubmit} action="">
            <input
              type="file"
              onChange={(e) => setselectedfile(e.target.files[0])}
            />
            <input type="submit" value="Upload" />
          </form>
        </div></>)}
      </div>
    </>
  );
};
