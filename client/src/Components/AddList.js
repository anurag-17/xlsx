import React, { useEffect, useState } from "react";
import { SideNavigation } from "./SideNavigation";
import "./AddList.css";
import axios from "axios";
import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { LOader } from "./LOader";
import { useAlert } from "react-alert";
import { clearErrors, logout, uploadsheet } from "../action/useraction";

export const AddList = () => {
  const [selectedfile, setselectedfile] = useState();
  const { user, isAuthenticated, res, error,loading } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  if (isAuthenticated === false) {
    navigate("/");
  }
  if(user.role==="user"){
    dispatch(logout())
    navigate("/employeelogin")
  }
  useEffect(() => {
    if (res ) {
      alert.success(res.message);
      dispatch(clearErrors());
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [ alert, dispatch, error,res]);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      console.log(selectedfile);
      formdata.append("xlsx", selectedfile);
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
      dispatch(uploadsheet(formdata));
    } catch (error) {
      alert.error(error);
      dispatch(clearErrors())
      console.log(error);
    }
  };
  console.log(loading);
  return (
    <>
      <Header />

      <div className="AddFlex">
        <SideNavigation />
        {loading !== false ? (
          <LOader />
        ) : (
          <>
            <div style={{ margin: "5% auto auto" }}>
              <form onSubmit={handlesubmit} action="">
                <input
                  type="file"
                  onChange={(e) => setselectedfile(e.target.files[0])}
                />
                <input type="submit" value="Upload" />
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};
