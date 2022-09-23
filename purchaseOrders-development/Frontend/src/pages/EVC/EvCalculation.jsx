/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import {
  Form,
  Card,
  Button,
  Row,
  Col,
  Table,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import * as XLSX from 'xlsx';

const EvCalculation = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [sheetData, setSheetData] = useState({});
  const [sheet, setSheet] = useState(null);
  const [data, setData] = useState();
  const [id, setId] = useState(0);

  const readDataFromExcel = (data) => {
    const workbook = XLSX.readFile(data);
    // setSheetNames(workbook.SheetNames);
    var mySheetData = {};
    for (let i = 0; i < workbook.SheetNames.length; i++) {
      let sheetName = workbook.SheetNames[i];
      const worksheet = workbook.Sheets[workbook.SheetNames[id]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        blankrows: '',
        header: 0,
      });
      mySheetData[sheetName] = jsonData;
      setData(jsonData);
    }

    setSheetData(mySheetData);
  };
console.log(data);
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    setFile(file);
    //read file
    const data = await file.arrayBuffer();
    const mySheetData = readDataFromExcel(data);
    // console.log(sheetData);
  };

  useEffect(() => {
    setSheet(Object.keys(sheetData));
  }, [sheetData]);

  const handleSubmit = (e) => {
    setSheet(Object.keys(sheetData));
    // console.log(data);
    e.preventDefault();
    // console.log('Sheet Data : ' + sheetData);
    // console.log(sheet);
    // console.log('File : ' + file);
    // console.log('data : ' + data);
    // console.log('File Name : ' + fileName);
  };
  const handleReset = (e) => {
    setData([]);
    setFileName(null);
    setFile(null);
    console.log(data);
  };

  const handleSelect = (e) => {
    console.log(e);
    setId(e);
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    const sheetname = workbook.SheetNames;
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className='container'>
      <Row>
        <Col>
          <Form>
            <Card className='text-center mt-3'>
              <Card.Header>Upload EV File</Card.Header>
              <Card.Body>
                {!fileName && <Card.Title>Please select EV file.</Card.Title>}
                {fileName && (
                  <Card.Title>{fileName} is uploaded successfully</Card.Title>
                )}
                <Card.Text>
                  <input
                    title='selectFile'
                    type='file'
                    name='file'
                    accept='.xlsx'
                    onChange={(e) => handleFile(e)}
                    required
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Form>
        </Col>
      </Row>
      {data!=="null" ? (
        <Row>
          <p className='mt-2'>Sheets in workbook : {sheet}</p>
          <DropdownButton
            className='mb-2'
            title='Select Sheet'
            onSelect={handleSelect}
          >
            {sheet.map((x, y) => (
              <Dropdown.Item key={y}>{x}</Dropdown.Item>
            ))}
          </DropdownButton>

          <Col md={12}>
            <div
              className='border'
              style={{
                overflowY: 'scroll',
                maxHeight: '500px',
                minHeight: '200px',
              }}
            >
              <Table responsive>
                <tbody className='border'>
                  {data.map((numList, i) => (
                    <tr key={i}>
                      {numList.map((num, j) => (
                        <td key={j}>{num}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className='d-grid gap-3 d-md-block'>
              <button
                className='btn btn-outline-danger mt-3'
                type='reset'
                onClick={() => handleReset()}
              >
                Cancel
              </button>
              <span style={{ margin: '3px' }} />
              <button
                className='mt-3 btn btn-outline-primary'
                onClick={handleSubmit}
              >
                Submit
              </button>
              <span style={{ margin: '3px' }} />
              <Button className='mt-3' onClick={() => downloadExcel(data)}>
                <i className='fa fa-download' aria-hidden='true'></i>
              </Button>
            </div>
          </Col>
        </Row>
      ) : null}
    </div>
  );
};
//   const [colDefs, setColDefs] = useState();
//   const [data, setData] = useState();

//   const convertToJson = (headers, data) => {
//     const rows = [];
//     data.forEach((row) => {
//       let rowData = {};
//       row.forEach((element, index) => {
//         rowData[headers[index]] = element;
//       });
//       rows.push(rowData);
//     });
//     return rows;
//   };

//   const importExcel = (e) => {
//     const file = e.target.files[0];

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       //parse data

//       const bstr = event.target.result;
//       const workBook = XLSX.read(bstr, { type: 'binary' });

//       //get first sheet
//       const workSheetName = workBook.SheetNames[0];
//       const workSheet = workBook.Sheets[workSheetName];
//       //convert to array
//       const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
//       // console.log(fileData)
//       const headers = fileData[0];
//       const heads = headers.map((head) => ({ title: head, field: head }));
//       setColDefs(heads);

//       //removing header
//       fileData.splice(0, 1);

//       setData(convertToJson(headers, fileData));
//     };

//     if (file) {
//       reader.readAsBinaryString(file);
//     } else {
//       setData([]);
//       setColDefs([]);
//     }
//   };

//   return (
//     <div className='App'>
//       <h1 align='center'>React-App</h1>
//       <h4 align='center'>Import Data from Excel, CSV in Material Table</h4>
//       <input type='file' onChange={importExcel} />
//       <MaterialTable title='Olympic Data' data={data} columns={colDefs} />
//     </div>
//   );
// };

export default EvCalculation;
