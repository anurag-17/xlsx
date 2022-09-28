import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { SideNavigation } from "./SideNavigation";
import"./viewlist.css"

export const Viewlist = () => {
  const [data, setdata] = useState([]);
  const [keys, setKeys] = useState([]);
  const [object, setObject] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  
  const nPages = Math.ceil(data.length / recordsPerPage);
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  let currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const getdata = async () => {
    const res = await axios.get("/api/auth/getxlsxfile");
    setdata(res.data);
    res.data.map((items, index) => {
      // console.log(items);
      if (index === 1) {
        setKeys(Object.keys(items));
      }
      // console.log(keys);
    });
  };
  let pagelimit=20
  const fd=data.filter((item,index)=>{
     // console.log(index);
     return index <=pagelimit
   })
 
  useEffect(() => {
    getdata()
  }, []);
  const fmap = () => {
    try {
      // console.log(data);
      const ffmap = currentRecords.map((row, index) => {
        return (
          <tr>
            {Object.keys(currentRecords[0]).map((key, index) => {
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
      const hhmap = Object.keys(currentRecords[0]).map((heading) => {
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
      <div className="AddFlex">
        <SideNavigation/>
        <div style={{width:"100%"}}>
          {data.length >= 1 ? (
            <>
              <div
                style={{ overflow: "scroll", width: "70%", margin: "0 21%" }}
                className="table-responsive"
              >
                <table className="table" responsive="true">
                  <thead>
                    <tr>{hmap()}</tr>
                  </thead>
                  <tbody>{fmap()}</tbody>
                </table>
              </div>
              <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            disabledClass
          />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
