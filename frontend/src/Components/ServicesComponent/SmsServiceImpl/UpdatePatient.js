import React, { useEffect, useState } from "react";
import "../ServicesMain.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { getPatientById, updatePatient } from "../../../Services/UpdatePatient";
import { ToastContainer, toast, error, success, info } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from 'jquery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
export default function UpdatePatient() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [patientId, setPatientId] = useState(data.patientId);
  const [patientName, setPatientName] = useState(data.patientName);
  const [doctorName, setDoctorName] = useState(data.doctorName);
  const [appointmentTime, setAppointmentTime] = useState(data.appointmentTime);
  const [appointmentDate, setAppointmentDate] = useState(data.appointmentDate);
  const [hospitalName, setHospitalName] = useState(data.hospitalName);
  const [contactNo, setContactNo] = useState(data.contactNo);
  const [errorMSg, setErrorMsg] = useState("Sorry ! Student Data Not Added...");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(patientId);
        const respo = await getPatientById(patientId);
        console.log(respo);
        setData(respo);
        setPatientId(data.patientId);
        setPatientName(data.patientName);
        setDoctorName(data.doctorName);
        setAppointmentTime(data.appointmentTime);
        setAppointmentDate(data.appointmentDate);
        setHospitalName(data.hospitalName);
        setContactNo(data.contactNo);
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
  }, [patientId]);
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
    // e.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const respons = await updatePatient(
          patientId,
          patientName,
          doctorName,
          appointmentTime,
          appointmentDate.getDay()+"/"+appointmentDate.getMonth()+"/"+appointmentDate.getFullYear(),
          hospitalName,
          contactNo
        );
        console.log(respons);
        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          toast.info("Data Updated Successfully....", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }, 2000);
        // alert("Data Updated Successfully....");
        console.log(data);
        navigate("/services/smsservice");
      } catch (error) {
        console.log(error);
        setErrorMsg(error);
        setTimeout(() => {
          setIsLoading(false);
          toast.info(errorMSg, { position: toast.POSITION.TOP_RIGHT });
        }, 2000);
        // alert(errorMSg);
      }
    };
    fetchData();
    console.log(errorMSg);
  };
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
              <h3 className="m-5">Update Patient Information</h3>
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
                      minLength={1}
                      maxLength={3}
                      className="pIdInput"
                      placeholder="511"
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
                      className="patientNameInput"
                      maxLength={50}
                      placeholder="Divyesh Variya"
                      defaultValue={patientName}
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
                      className="docNameInput"
                      maxLength={50}
                      placeholder="Jashwant Dave"
                      defaultValue={doctorName}
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
                      <option selected disabled>Select Time Slot</option>
                      <option>11:00 AM</option>
                      <option>12:00 AM</option>
                      <option>01:00 PM</option>
                      <option>02:00 PM</option>
                      <option>03:00 PM</option>
                      <option>04:00 PM</option>
                      <option>05:00 PM</option>
                      <option>06:00 PM</option>
                      <option>07:00 PM</option>
                      <option>08:00 PM</option>
                      <option>09:00 PM</option>
                      <option>10:00 PM</option>
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
                      defaultValue={appointmentDate}
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
                      defaultValue={hospitalName}
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
                      defaultValue={contactNo}
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
                  <Button type="submit" variant="warning">
                    Update Data
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
