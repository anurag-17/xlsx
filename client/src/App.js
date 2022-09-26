// import React from 'react'
// import { Fileuploadexlsx } from './Aadil/Fileuploadexlsx';

// function  App  () {
//   return (
//    <>
// <Fileuploadexlsx/>
//    </>
//   )
// }
// export default App;
import React, { useState } from "react";
import axios from "axios"
import "./App.css";
import * as XLSX from "xlsx";
function App() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws,null,2);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };
  console.log(items);
  const sub = async () => {
        
    console.log(items);
        const data = await axios.post(
          "http://localhost:5000/api/auth/aadil",
          {items},
        );
        console.log(data);
      };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

          <button onClick={sub}>submit</button>
      <table class="table container">
        <thead>

        </thead>
        <tbody>
          {items.map((d) => {
            // console.log(d);
            return(
              (
                <tr key={d.InputA}>
                  <th>{d.InputA}</th>
                  <td>{d.InputB}</td>
                </tr>
              )
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;