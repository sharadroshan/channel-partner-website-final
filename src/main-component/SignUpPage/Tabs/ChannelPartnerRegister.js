import React, {useState} from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: '100%',
      border: '1px solid #ced4da',
      padding: '4px 10px',
      borderRadius: '5px'
    },
  }));
const Registration = () => {
    const classes = useStyles();
  const [selectedDate1, setSelectedDate1] = useState(new Date());
 
  return (
    
    <>
      <h4 className="text-primary mb-4">Channel Partner Register</h4>

      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col md={6} sm={12}>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3 text-dark">Personal Details</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>CP ID</Form.Label>
                      <Form.Control type="name" placeholder="Enter CP Id" />
                    </Form.Group>
                    <Form.Group controlId="formFile"  as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Profile Picture</Form.Label>
                      <Form.Control type="file" className="py-1"/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter First name" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Last name" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>DOB</Form.Label>
                      <TextField
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email Address" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Mobile Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter mobile number" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Landline Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter landline number" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Select Gender</Form.Label>
                      <Form.Check type="radio" id="default-radio1" name="customRadio" label="Male" />
                      <Form.Check
                          type="radio"
                          id="default-radio2"
                          name="customRadio"
                          label="Female"
                          defaultChecked={true}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Address</Form.Label>
                      <Form.Control as="textarea" rows={3} className="py-1"/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Landmark</Form.Label>
                      <Form.Control as="textarea" rows={3} className="py-1"/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                    <Form.Label>Select State</Form.Label>
                    <Form.Control as="select" className="text-left">
                        <option>Maharashtra</option>
                        <option>Madhya Pradesh</option>
                        <option>Gujrat</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                    <Form.Label>Select City</Form.Label>
                    <Form.Control as="select" className="text-left">
                        <option>Pune</option>
                        <option>Mumbai</option>
                        <option>Dhule</option>
                        <option>Indore</option>
                        <option>Bhopal</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control type="text" placeholder="Enter Pincode" />
                    </Form.Group>
                  </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col  md={6} sm={12}>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3 text-dark">Bank Details</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Account Holder Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Account Holder Name" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Bank Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Bank Name" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Account Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter Account Number" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" placeholder="Enter IFSC Code" />
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label> Branch Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Branch Name" />
                    </Form.Group>
                  </Row>
              </Card.Body>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <h4 className="header-title mb-3 text-dark">Documents</h4>
                  <Row>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Pan Card</Form.Label>
                      <Form.Control type="file"  className="py-1"/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Aadhar Card</Form.Label>
                      <Form.Control type="file"  className="py-1"/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Driving License</Form.Label>
                      <Form.Control type="file"  className="py-1"/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Upload Passport</Form.Label>
                      <Form.Control type="file"  className="py-1"/>
                    </Form.Group>
                    <Form.Group as={Col} md={12} className="mb-2">
                      <Form.Label>Voter ID</Form.Label>
                      <Form.Control type="file"  className="py-1"/>
                    </Form.Group>
                  </Row>
                  <Button
                    variant="primary"
                    className="btn-bordered rounded-pill waves-effect waves-light btn w-100"
                    type="submit"
                    style={{ border: "none", width: "200px", marginTop: "20px" }}
                  >
                    Submit
                  </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Registration;
