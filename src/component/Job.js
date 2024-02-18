import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./job.css";
const Job = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3">Raise Support</h2>
        <Card className="shadow mt-3 p-3">
          <Form className="form_s fw-bold">
            <Row>
              <Form.Group className="mb-3 col-lg-6 " controlId="formBasicName">
                <Form.Label> Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Name" />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicTargetField"
              >
                <Form.Label>Target Field</Form.Label>
                <Form.Control
                  type="text"
                  name="tfield"
                  placeholder="Website Link"
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicJobCategory"
              >
                <Form.Label>Job Category</Form.Label>
                <Form.Select aria-label="Technology">
                  <option>Technology</option>
                  <option value="1">Software Developer/Engineer</option>
                  <option value="2">Data Scientist</option>
                  <option value="3">AI/Machine Learning Engineer</option>
                  <option value="4">Cybersecurity Analyst</option>
                  <option value="5">Cloud Architect</option>
                  <option value="6">Full Stack Developer</option>
                  <option value="7">IT Project Manager</option>
                  <option value="8">IT Consultant</option>
                  <option value="9">Network Engineer:</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicJobType"
              >
                <Form.Label>Job Type</Form.Label>
                <Form.Select aria-label="Full-Time">
                  <option>Full-Time</option>
                  <option value="1">Part-Time</option>
                  <option value="2">Seasonal</option>
                  <option value="3">Contract</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicLocation"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Location"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicSalaryRange"
              >
                <Form.Label>Salary Range</Form.Label>
                <Form.Control
                  type="text"
                  name="range"
                  placeholder="Salary Range"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicExprience"
              >
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  name="exprience"
                  placeholder="Experience"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicQulification"
              >
                <Form.Label>Qualification</Form.Label>
                <Form.Control
                  type="text"
                  name="qulification"
                  placeholder="Qualification"
                />
              </Form.Group>

              <div className="submit_btn">
                <Button variant="primary" className="submit_btn" type="submit">
                  Submit
                </Button>
              </div>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Job;
