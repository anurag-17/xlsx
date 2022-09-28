import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
  Form,
  Card,
  Button,
  Row,
  Col,
  Table,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Uploadexcle } from "./Components/Uploadexcle";
import { Tabl } from "./Components/Table";
import { Upload } from "./Components/Upload";
import { AdminLogin } from "./Components/AdminLogin";
import { useDispatch, useSelector } from "react-redux";
import { SideNavigation } from "./Components/SideNavigation";
import { AddList } from "./Components/AddList";
import { loaduser } from "./action/useraction";
import { Viewlist } from "./Components/Viewlist";
import { BankForm } from "./Components/BankForm";
import { Header } from "./Components/Header";
import { EmployeeLogin } from "./Components/EmployeeLogin";

function App() {
  const dispatch = useDispatch();
  dispatch(loaduser());
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [sheet, setSheet] = useState(null);
  const [objj, setObjj] = useState(null);
  let data = null;

  const getHeadings = () => {
    return Object.keys(data[0]);
  };
  return (
    <div className="container">
      {/* <Upload/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protectedroute><AdminLogin /></Protectedroute>}/>
          <Route path="/addlist" element={<AddList/>}/>
          <Route path="/viewlist" element={<Viewlist/>}/>
          <Route path="/bankform" element={<BankForm/>}/>
          <Route path="/employeelogin" element={<Protectedroute><EmployeeLogin/></Protectedroute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function Protectedroute(props) {
  const { user,isAuthenticated } = useSelector((state) => state.user);
  if (user) {
    if (user.role === "admin") {
      return <Navigate to="/addlist" />;
    }
    else if(user.role==="user"){
      return <Navigate to="/bankform" />
    }
  } else {
    return props.children;
  }
}

