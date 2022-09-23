import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertSubmitted = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert
        className='mt-3'
        show={show}
        onClose={() => setShow(false)}
        variant='primary'
        dismissible
      >
        File submitted successfully.{' '}
      </Alert>
    </>
  );
};

export default AlertSubmitted;
