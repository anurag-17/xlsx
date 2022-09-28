import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, emplyelogin, login } from '../action/useraction';
import "./EmployeeLogin.css";
export const EmployeeLogin = () => {
    const alert = useAlert();
    const { user, isAuthenticated, loading, error } = useSelector(
      (state) => state.user
    );
    const dispatch = useDispatch();
    const [employeeData, setEmployeeData] = useState({
        username: "",
        userpwd: ""
    })
    const Input_Handler = (e) =>{
        setEmployeeData({...employeeData, [e.target.name]: e.target.value})
    }
    const Submittion = (e)=>{
    e.preventDefault()
    setEmployeeData(employeeData)
    console.log(employeeData);
    try {
        dispatch(emplyelogin(employeeData.username, employeeData.userpwd));
      } catch (error) {
        return error;
      }
    }
    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
      }, [error]);
    
  return (
    <>
            <div className="container">
                <div className="contentAdmin">
                    <h3>Employee Login</h3>
                    <form action="" onSubmit={Submittion}>
                        <div className="flexbox">
                            <h5>User name</h5>
                            <input type="text" name="username" placeholder='Enter user name' onChange={Input_Handler} value={employeeData.username}/>
                        </div>
                        <div className="flexboxA">
                            <h5>Password</h5>
                            <input type="password" name="userpwd" placeholder='Enter password' onChange={Input_Handler}value={employeeData.userpwd} />
                        </div>
                        <div className="buton">
                            <input type="submit" value="Login" className='btn btn-success' id='buttonSubmit' />
                        </div>
                    </form>
                </div>
            </div>
        </>
  )
}
