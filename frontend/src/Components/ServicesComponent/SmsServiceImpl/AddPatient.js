import React, { useEffect, useState } from "react";
import "../ServicesMain.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { addPatient } from "../../../Services/AddPatient";
import { ToastContainer, toast, error, success, info } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from "jquery";
import addDays from "date-fns/addDays";
export default function AddPatient() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [hospitalName, setHospitalName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [errorMSg, setErrorMsg] = useState("Sorry ! Student Data Not Added...");
  const [isLoading, setIsLoading] = useState(false);

  const handlePatientId = (e) => {
    e.preventDefault();
    setPatientId(e.target.value);
  };
  const handlePatientName = (e) => {
    e.preventDefault();
    setPatientName(e.target.value);
  };
  const handleDoctorName = (e) => {
    e.preventDefault();
    setDoctorName(e.target.value);
  };
  const handleAppointmentTime = (e) => {
    e.preventDefault();
    setAppointmentTime(e.target.value);
  };
  const handleAppointmentDate = (e) => {
    // e.preventDefault();
    console.log(e);
    setAppointmentDate(e);
  };
  const handleHospitalName = (e) => {
    e.preventDefault();
    setHospitalName(e.target.value);
  };
  const handleContactNo = (e) => {
    e.preventDefault();
    setContactNo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        console.log(
          patientId,
          patientName,
          doctorName,
          appointmentTime,
          appointmentDate,
          hospitalName,
          contactNo
        );
        const respons = await addPatient(
          patientId,
          patientName,
          doctorName,
          appointmentTime,
          appointmentDate.getDay() +
            "/" +
            appointmentDate.getMonth() +
            "/" +
            appointmentDate.getFullYear(),
          hospitalName,
          contactNo
        );
        console.log(respons);
        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          toast.info("Data Added Successfully....", {
            position: toast.POSITION.TOP_RIGHT,
          });
          //   alert("Data Added Successfully....");
        }, 2000);
        console.log(data);
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

  useEffect(() => {}, []);
  $(document).ready(function () {
    $(".patientNameInput").keypress(function (e) {
      var regex = new RegExp("^[a-zA-Z ]+$");
      var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (regex.test(str)) {
        return true;
      } else {
        // e.preventDefault();
        $(".error").show();
        $(".error").text("Please Enter Alphabate Only...");
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".docNameInput").keypress(function (e) {
      var regex = new RegExp("^[a-zA-Z ]+$");
      var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (regex.test(str)) {
        return true;
      } else {
        // e.preventDefault();
        $(".error").show();
        $(".error").text("Please Enter Alphabate Only...");
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".hospitalNameInput").keypress(function (e) {
      var regex = new RegExp("^[a-zA-Z ]+$");
      var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (regex.test(str)) {
        return true;
      } else {
        // e.preventDefault();
        $(".error").show();
        $(".error").text("Please Enter Alphabate Only...");
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".pIdInput").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        $(".error").html("Please Enter Number Only...").stop().show();
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".contactNoInput").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        $(".error").html("Please Enter Number Only...").stop().show();
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".appointmentTimeInput").keypress(function (e) {
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
              <h3 className="m-5">Add Patient</h3>
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
                      type="text"
                      name="patientId"
                      className="pIdInput"
                      placeholder="511"
                      maxLength={3}
                      minLength={1}
                      onChange={(e) => {
                        handlePatientId(e);
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
                      maxLength={50}
                      className="patientNameInput"
                      onChange={(e) => {
                        handlePatientName(e);
                      }}
                      required
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
                      maxLength={50}
                      className="docNameInput"
                      onChange={(e) => {
                        handleDoctorName(e);
                      }}
                      required
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
                    <Form.Select name="appointmentTime" required>
                      <option  disabled>Select Time Slot</option>
                      <option required>11:00 AM</option>
                      <option required>12:00 AM</option>
                      <option required>01:00 PM</option>
                      <option required>02:00 PM</option>
                      <option required>03:00 PM</option>
                      <option required>04:00 PM</option>
                      <option required>05:00 PM</option>
                      <option required>06:00 PM</option>
                      <option required>07:00 PM</option>
                      <option required>08:00 PM</option>
                      <option required>09:00 PM</option>
                      <option required>10:00 PM</option>
                    </Form.Select>
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
                    <DatePicker
                      minDate={new Date()}
                      maxDate={addDays(new Date(), 7)}
                      selected={appointmentDate}
                      onChange={(e) => {
                        handleAppointmentDate(e);
                      }}
                      className="appointmentDate"
                      name="appointmentDate"
                      placeholderText="  dd/mm/yyyy"
                      required
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
                      className="hospitalNameInput"
                      maxLength={50}
                      placeholder="City Hospital"
                      onChange={(e) => {
                        handleHospitalName(e);
                      }}
                      required
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
                      type="text"
                      name="contactNo"
                      placeholder="9876543210"
                      maxLength={10}
                      minLength={10}
                      className="contactNoInput"
                      onChange={(e) => {
                        handleContactNo(e);
                      }}
                      required
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
                  <Button type="submit" variant="success">
                    Add Data
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
