import axios from "axios";
import React, { useEffect, useState } from "react";
import { SideNavigation } from "./SideNavigation";

export const Viewlist = () => {
  const [data, setdata] = useState([{}]);
  const [keys, setKeys] = useState([]);
  const [object, setObject] = useState();

  const getdata = async () => {
    const res = await axios.get("http://localhost:5000/api/auth/getxlsxfile");
    setdata(res.data);
    res.data.map((items, index) => {
      console.log(items);
      if (index === 1) {
        setKeys(Object.keys(items));
      }
    });
  };
  useEffect(() => {
    getdata();
  }, []);
  const fmap = () => {
    try {
      const ffmap = data.map((row, index) => {
        return (
          <tr>
            {Object.keys(data[0]).map((key, index) => {
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
      const hhmap = Object.keys(data[0]).map((heading) => {
        console.log(heading);
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
        <div style={{width:"70%"}}>
          {data.length >= 1 ? (
            <>
              <div
                style={{ overflow: "scroll", width: "70%", margin: "80px auto" }}
                className="table-responsive"
              >
                <table className="table" responsive>
                  <thead>
                    <tr>{hmap()}</tr>
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
  );
};
