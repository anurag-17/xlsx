/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';

const DMRinputs = (props) => {
  return (
    <div>
     <div className='d-flex justify-content-evenly m-3'>
        <InputGroup className='mt-3 mb-3'>
          <InputGroup.Text>PO Number </InputGroup.Text>
          <Form.Control name='ponumber' value={props.details.ponumber}  disabled />
        </InputGroup>
        <span className='input-group-btn' style={{ width: '10px' }}></span>
        <InputGroup className='mt-3 mb-3'>
          <InputGroup.Text>Date </InputGroup.Text>
          <Form.Control  label='Enter Amount' name='date' value={props.details.date} disabled/>
          
        </InputGroup>
      </div>

      <Table striped bordered hover responsive='sm' variant='light' >
        <thead>
          <tr>
            <th>Product</th>
            <th>Amount</th>
            <th>Raised Amount</th>
            <th>DMR No.</th>
          </tr>
        </thead>
        <tbody>
          {(props.details.details).map((elementInArray) => {
            return (
              <tr>
                <th scope='row'>
                  <Form.Control name='poproduct' value={elementInArray.description} disabled />
                </th>
                <td>
                  <Form.Control name='poamount' value={elementInArray.amount} disabled />
                </td>
                <td>
                  <Form.Control name='raisedamount' value={elementInArray.raisedAmount} />
                </td>
                <td>
                  <Form.Control name='dmrno' value={elementInArray.dmrNo} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div className='d-flex justify-content-between mb-3'>
        <Button type='submit'>Submit</Button>
      </div>
    </div>
  );
};

export default memo(DMRinputs);
