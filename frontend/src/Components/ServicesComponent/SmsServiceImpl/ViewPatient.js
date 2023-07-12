import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../ServicesMain.css";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast, error, success, info } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { viewAllPatient } from "../../../Services/ViewPatient";
import { sendSmsById, sendSmsToAll } from "../../../Services/SendSms";
import { useNavigate } from "react-router-dom";
export default function ViewPatient() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [errorMSg, setErrorMsg] = useState(
    "Sorry ! Something Went to wrong..."
  );
  const [isLoading, setIsLoading] = useState(false);
  let [smsDataForId, setSmsDataForId] = useState("");
  let [errorSmsMSgForId, setSmsErrorMsgForId] = useState("");
  let [smsDataForAll, setSmsDataForAll] = useState([]);
  let [errorSmsMSgForAll, setSmsErrorMsgForAll] = useState([]);

  let handleSendSMSById = (contactNo) => {
    const sendSMSById = async (contactNo) => {
      setIsLoading(true);
      try {
        const respons = await sendSmsById(contactNo);
        console.log(respons);
        setSmsDataForId(respons);
        setTimeout(() => {
          setIsLoading(false);
          toast.info(respons, { position: toast.POSITION.TOP_RIGHT });
          navigate("/services/smsservice");
        }, 2000);
        setTimeout(() => {
          setSmsDataForId("");
        }, 5000);
      } catch (error) {
        setSmsErrorMsgForId(error.message);
        setTimeout(() => {
          setIsLoading(false);
          console.log(error.message);
          toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
          navigate("/services/smsservice");
        }, 2000);
        setTimeout(() => {
          setSmsErrorMsgForId("");
        }, 5000);
      }
    };
    sendSMSById(contactNo);
  };
  const handleSendSMSToAll = () => {
    const sendSMSToAll = async () => {
      setIsLoading(true);
      try {
        const respons = await sendSmsToAll();
        console.log(respons);
        setSmsDataForAll(respons);
        setTimeout(() => {
          setIsLoading(false);
          respons.map((r) => {
            console.log(r.body);
            toast.info(r.body, { position: toast.POSITION.TOP_RIGHT });
          });
          navigate("/services/smsservice");
        }, 2000);
        setTimeout(() => {
          setSmsDataForAll("");
        }, 5000);
      } catch (error) {
        setSmsErrorMsgForAll(error);
        setTimeout(() => {
          setIsLoading(false);
          console.log(error.message);
          toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
          navigate("/services/smsservice");
        }, 2000);
        setTimeout(() => {
          setSmsErrorMsgForAll("");
        }, 5000);
      }
    };
    sendSMSToAll();
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const respons = await viewAllPatient();

        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          toast.success("Information received...", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log(respons);
        }, 2000);
      } catch (error) {
        setErrorMsg(error.message);
        setTimeout(async () => {
          console.log(error);
          setIsLoading(false);
          toast.error(error.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }, 2000);
      }
    };
    fetchData();
  }, []);
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
              <h3 className="m-3">View All Patient</h3>
            </div>
            <div className="m-4">
              <div>
                <div className="restApiMsg">{errorSmsMSgForAll}</div>
                <h6 className="restApiMsg">{errorSmsMSgForId}</h6>
                <div className="restApiMsg">
                  {Array.from(smsDataForAll).map((msg) => (
                    <h6>{msg.body}</h6>
                  ))}
                </div>
                <h6 className="restApiMsg">{smsDataForId}</h6>
              </div>
              <div className="m-3">
                <Button
                  variant="outline-info"
                  onClick={() => {
                    handleSendSMSToAll();
                  }}
                >
                  Send SMS To All
                </Button>
              </div>
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Patient Id</th>
                    <th>Patient Name</th>
                    <th>Doctor Name</th>
                    <th>Appointment Time</th>
                    <th>Appointment Date</th>
                    <th>Hospital Name</th>
                    <th>Contact No</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((patient) => (
                    <tr key={patient.patientId}>
                      <td>{patient.patientId}</td>
                      <td>{patient.patientName}</td>
                      <td>{patient.doctorName}</td>
                      <td>{patient.appointmentTime}</td>
                      <td>{patient.appointmentDate}</td>
                      <td>{patient.hospitalName}</td>
                      <td>{patient.contactNo}</td>
                      <td>
                        <Button
                          onClick={() => {
                            handleSendSMSById(patient.contactNo);
                          }}
                          variant="outline-primary"
                        >
                          Send SMS
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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
                    navigate("/services");
                  }}
                >
                  <i class="fa fa-arrow-circle-left"></i>
                  <span>Go To Other Services</span>{" "}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
