import React, { useState } from "react";
import { SideNavigation } from "./SideNavigation";
import "./AddList.css";
import axios from "axios";

export const AddList = () => {
  const [selectedfile, setselectedfile] = useState();

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
      <div className="AddFlex">
        <SideNavigation />
        <div>
          <form onSubmit={handlesubmit} action="">
            <input
              type="file"
              onChange={(e) => setselectedfile(e.target.files[0])}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
};
