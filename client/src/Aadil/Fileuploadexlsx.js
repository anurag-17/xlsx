// import React, { useState } from "react";

// import axios from "axios";
// import * as XLSX from "xlsx";

// export const Fileuploadexlsx = () => {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState(null);
//   const [sheet, setSheet] = useState(null);
//   const handleFile = async (e) => {
//     const files = e.target.files[0];
//     console.log(files);
//     const data1 = await files.arrayBuffer();
//     const wb = XLSX.readFile(data1);
//     console.log(wb.Sheets.Sheet1
//         );
//     setFile(files);
//   };
//   console.log(file);

//   const sub = async () => {
//       console.log(file);
//       const config = {
//           headers: {
//               "Content-Type": "multipart/apl",
//             },
//             responseType: "arraybuffer",
//     };

//     const data = await axios.post(
//       "http://localhost:5000/api/auth/aadil",
//       file,
//       config
//     );
//     console.log(data);
//   };
//   return (
//     <div>
//       <input
//         title="selectFile"
//         type="file"
//         name="file"
//         accept=".xlsx"
//         required
//         onChange={(e) => handleFile(e)}
//       />
//       <button onClick={sub}>submit</button>
//     </div>
//   );
// };




















