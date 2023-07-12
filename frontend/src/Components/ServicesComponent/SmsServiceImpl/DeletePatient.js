import React, { useEffect, useState } from "react";
import "../ServicesMain.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { deletePatient, getPatientById } from "../../../Services/DeletePatient";
import { ToastContainer, toast, error, success, info } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
export default function DeletePatient() {
  let navigate = useNavigate();
  const [patientid, setPatientId] = useState();
  const [data, setData] = useState([]);
  const [errorMSg, setErrorMsg] = useState("Sorry ! Student Data Not Added...");
  const [isLoading, setIsLoading] = useState(false);
  const handleOnChangeId = (e) => {
    e.preventDefault();
    setPatientId(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const respons = await deletePatient(patientid);
        console.log(respons);
        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          toast.info("Data Deleted Successfully....", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }, 2000);
        //   alert("Data Deleted Successfully....");
        setPatientId();
        navigate("/services/smsservice");
      } catch (error) {
        console.log(error);
        setErrorMsg(error);
        setTimeout(() => {
          setIsLoading(false);
          toast.info(errorMSg, { position: toast.POSITION.TOP_RIGHT });
        }, 2000);
        //   alert(errorMSg);
      }
    };
    fetchData();
    console.log(errorMSg);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const respo = await getPatientById(patientid);
        console.log(respo);
        setData(respo);
        setTimeout(async () => {
          console.log(respo);
          // setIsLoading(false);
            toast.info("Data Receiced...", {
              position: toast.POSITION.TOP_RIGHT,
            });
        }, 2000);
      } catch (error) {
        console.log(error);
        setErrorMsg(error);
      }
    };
    getData();
  }, [patientid]);
  $(document).ready(function () {
    $(".pIdInput").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        $(".error").html("Please Enter Number Only...").stop().show();
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
  });
  return (
    <>
      <div className="componentBody">
        {isLoading ? (
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            <ToastContainer />
            <div>
              <h3 className="m-5">Delete Patient Information</h3>
            </div>
            <h6 className="error"></h6>
            <div>
              <Form onSubmit={handleSubmit} style={{ padding: "20px 0px" }}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.patientId"
                >
                  <Form.Label column sm="4">
                    Patient Id :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="number"
                      name="patientId"
                      className="pIdInput"
                      maxLength={3}
                      minLength={1}
                      placeholder="511"
                      onChange={(e) => {
                        handleOnChangeId(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.patientName"
                >
                  <Form.Label column sm="4">
                    Patient Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="patientName"
                      placeholder="Divyesh Variya"
                      defaultValue={data.patientName}
                      plaintext
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.doctorName"
                >
                  <Form.Label column sm="4">
                    Doctor Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="doctorName"
                      placeholder="Jashwant Dave"
                      defaultValue={data.doctorName}
                      plaintext
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.appointmentTime"
                >
                  <Form.Label column sm="4">
                    Appointment Time :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="number"
                      name="appointmentTime"
                      placeholder="8"
                      defaultValue={data.appointmentTime}
                      readOnly
                      plaintext
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.appointmentDate"
                >
                  <Form.Label column sm="4">
                    Appointment Date :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="date"
                      name="appointmentDate"
                      placeholder="8"
                      defaultValue={data.appointmentDate}
                      plaintext
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.hospitalName"
                >
                  <Form.Label column sm="4">
                    Hospital Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="hospitalName"
                      placeholder="City Hospital"
                      defaultValue={data.hospitalName}
                      plaintext
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.contactNo"
                >
                  <Form.Label column sm="4">
                    Contact No :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="number"
                      name="contactNo"
                      placeholder="9876543210"
                      defaultValue={data.contactNo}
                      plaintext
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Button
                    variant="dark"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "5px",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      navigate("/services/smsservice");
                    }}
                  >
                    <i class="fa fa-arrow-circle-left"></i>
                    <span>Back</span>{" "}
                  </Button>
                  <Button type="submit" variant="danger">
                    Delete Data
                  </Button>
                </div>
              </Form>
            </div>
          </>
        )}
      </div>
    </>
  );
}
