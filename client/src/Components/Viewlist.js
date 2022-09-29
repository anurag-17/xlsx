import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apidata } from "../action/apiaction";
import { Pagination } from "./Pagination";
import { SideNavigation } from "./SideNavigation";
import"./viewlist.css"

export const Viewlist = () => {
  let { filedata} = useSelector((state) =>state.apidata);
  const [data, setdata] = useState([]);
  const [keys, setKeys] = useState([]);
  const [object, setObject] = useState();
  filedata=[]
  const [currentPage, setCurrentPage] = useState(1);
  
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  
  const nPages = Math.ceil(filedata.length / recordsPerPage);
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  let currentRecords = filedata.slice(indexOfFirstRecord, indexOfLastRecord);
  const dispatch =useDispatch()
  const { user, isAuthenticated, loading} = useSelector((state) =>state.user);

  const getdata = async () => {
    dispatch(apidata())
    // setdata(res.data);
    // res.data.map((items, index) => {
    //   // console.log(items);
    //   if (index === 1) {
    //     setKeys(Object.keys(items));
    //   }
    //   // console.log(keys);
    // });
  };
  let pagelimit=20
  const fd=filedata.filter((item,index)=>{
     // console.log(index);
     return index <=pagelimit
   })
 
  useEffect(() => {
dispatch(apidata())
  }, []);
  const fmap = () => {
    try {
      // console.log(data);
      const ffmap = currentRecords.map((row, index) => {
        console.log(row);
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
          {filedata.length >1 ? (
            <>
              <div
                style={{ overflow: "scroll", width: "70%", margin: "0 21%" }}
                className="table-responsive"
              >sssss
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
