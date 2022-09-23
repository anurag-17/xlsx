import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import AddRows from "./AddRows";
import axios from 'axios'
import { toast } from "react-toastify";

const PoDetails = ({ file }: any) => {
  const [inputList, setInputList] = useState({
    po_id: '',
    date: "",
    taskList: [{ index: Math.random(), po_description: "", amount: 0, po_id: '' }]
  });

  const handleAddRows = (e: any) => {
    const pid = inputList.po_id;
    setInputList({
      ...inputList,
      taskList: [
        ...inputList.taskList,
        { index: Math.random(), po_description: "", amount: 0, po_id: pid },
      ],
    });
  };
  const handleRemoveRows = (index: number) => {
    setInputList({
      ...inputList,
      taskList: inputList.taskList.filter((s, sindex) => index !== sindex),
    });
  };
  const formSubmit = (e: any) => {
    e.preventDefault();
    const items = inputList.taskList
    items[0].po_id = inputList.po_id
    const details = {
      po_id: inputList.po_id, po_file: file,
      po_date: inputList.date
    }
    //console.log(file)
    console.log(details)
    console.log(items)
    let data = { details, items }
    console.log(data)

    axios.post("http://localhost:9000/poDetails", data)
      .then((d) => {
        console.log(d.data)
        toast.info("Data Submitted Successfully")
      })
      .catch(err => {
        console.log(err)
        toast.error('Something went wrong');
      });
  };
  return (
    <>

      <div
        className="border p-3 mt-4 "
      >
        <h1 className="text-center">
          Please fill Purchase Order details
        </h1>
        <br />
        <Form className="g-3">
          <Form.Group>

            <br />
            <Row>
              <Form.Label column lg={2}>
                PO Number :
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Enter order number"
                  name="number"
                  value={inputList.po_id}
                  onChange={(e) =>
                    setInputList({ ...inputList, po_id: e.target.value })
                  }
                />
              </Col>

              <Form.Label column lg={2}>
                Select Date :
              </Form.Label>
              <Col>
                <Form.Control
                  type="date"
                  placeholder="Select Date"
                  name="date"
                  value={inputList.date}
                  onChange={(e) =>
                    setInputList({ ...inputList, date: e.target.value })
                  }
                />
              </Col>
            </Row>
            <br />

          </Form.Group>
        </Form>
        <AddRows

          deleted={handleRemoveRows}
          inputList={inputList}
          setInputList={setInputList}
        />
        <Form.Group className="d-flex justify-content-between" as={Col}>
          <Button type="submit" onClick={formSubmit}>Submit</Button>
          <button
            title="addRows"
            onClick={handleAddRows}
            type="button"
            className="btn btn-outline-primary  ">
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </button>

        </Form.Group>



      </div>

    </>
  );
};

export default PoDetails;
