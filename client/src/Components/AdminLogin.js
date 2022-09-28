import React, { useEffect, useState } from "react";
import "./AdminLogin.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../action/useraction";
import { useAlert } from "react-alert";

export const AdminLogin = () => {
  const alert = useAlert();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [adminData, setAdminData] = useState({
    username: "",
    userpwd: "",
    
  });
  const Input_Handler = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };
  const Submittion = (e) => {
    e.preventDefault();
    setAdminData(adminData);
    console.log(adminData);
    // setAdminData({
    //   username: "",
    //   userpwd: "",

    // })
    try {
      dispatch(login(adminData.username, adminData.userpwd));
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [error]);

  return (
    <>
   
   {loading?("loading..."):(   <div className="container">
        <div className="contentAdmin">
          <h3>Admin Login</h3>
          <form action="" onSubmit={Submittion}>
            <div className="flexbox">
              <h5>User name</h5>
              <input
                type="text"
                name="username"
                placeholder="Enter user name"
                onChange={Input_Handler}
                value={adminData.username}
              />
            </div>
            <div className="flexboxA">
              <h5>Password</h5>
              <input
                type="text"
                name="userpwd"
                placeholder="Enter password"
                onChange={Input_Handler}
                value={adminData.userpwd}
              />
            </div>
            <div className="buton">
              <input
                type="submit"
                value="Login"
                className="btn btn-success"
                id="buttonSubmit"
              />
            </div>
          </form>
        </div>
      </div>)}
    </>
  );
};
