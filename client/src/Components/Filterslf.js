import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Filterslf = () => {
  const {tlfname}= useParams()
  const getUniqueBy = (arr, prop) => {
    const set = new Set;
    return arr.filter(o => !set.has(o[prop]) && set.add(o[prop]));
  };
  console.log(tlfname);
          const [data, setData] = useState([]);
          const [filterdata, setfilterdata] = useState([]);
        
     
          const searchdistrict = async (e) => {
        
            const res = await axios.post(
              "/api/auth/searchall",{"TLF_NAME":tlfname}
            );
          console.log(res.data);
          setfilterdata(res.data);
          };
          useEffect(() => {
            
            searchdistrict();
          }, []);
        
          const fmap = () => {
            try {
              // console.log(data);
              const ffmap = getUniqueBy(filterdata,"SLF_NAME").map((row, index) => {
                console.log(row.SLF_NAME);
                return (
                  // {Object}.key(filterdata[0]),
                  <tr>
                    <Link to={row.SLF_NAME}>
                    <td>{row.SLF_NAME}</td>
                    </Link>
                  </tr>
                )
              })
              return ffmap;
            } catch (error) {
              console.log(error);
            }
          };
       
          return (
        
            <div>
             
              <div className="AddFlex">
                <div style={{ width: "70%", marginLeft: "23%",marginTop:"10%" }}>
               
        
                
        
                  <div style={{ width: "100%" }}>
                    {filterdata.length >=1 ? (
                      <>
                        <div
                          style={{ overflow: "scroll" }}
                          className="table-responsive"
                          >
                          <table className="table" responsive="true">
                            <thead>
                              <tr><td>SLF_NAME</td></tr>
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
        )
        };
        
    