import { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import AlertSubmitted from "../../components/Alert";
import PoDetails from "./PoForm/PoDetails";

type Props = {};

const UploadPo = (props: Props) => {

  const [submitPdf, setSubmitPdf] = useState(false);
  const [file, setFile] = useState<File>();
  const handleSubmit = (e: any) => {
    setSubmitPdf(true);
    setFile(file);
    e.preventDefault();
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Card
          className="text-center mt-3"
        >
          <Card.Header>Upload PO</Card.Header>
          <Card.Body>

            <Card.Title>Please select Purchase Order file.</Card.Title>
            <Card.Text>
              <input title="file" type="file" name="file" onChange={(e: any) => setFile(e.target.value)}
                required
              />
            </Card.Text>
            {!submitPdf ? <Button type="submit" variant="primary">
              Submit
            </Button> : <Button type="submit" variant="primary">
              Submitted
            </Button>
            }
            {submitPdf ? <AlertSubmitted /> : null}
          </Card.Body>
        </Card>
      </Form>
      {submitPdf && <PoDetails file={file} />}
    </div>
  );
};

export default UploadPo;
