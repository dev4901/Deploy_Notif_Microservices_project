import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../ServicesMain.css";
import { viewAllStudent } from "../../../Services/ViewStudents";
import Button from "react-bootstrap/Button";
import { sendEmailById, sendEmailToAll } from "../../../Services/SendEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
function ViewStudent() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [errorMSg, setErrorMsg] = useState(
    "Sorry ! Something Went to wrong..."
  );
  let [emailDataForId, setEmailDataForId] = useState("");
  let [errorEmailMSgForId, setEmailErrorMsgForId] = useState("");
  let [emailDataForAll, setEmailDataForAll] = useState([]);
  let [errorEmailMSgForAll, setEmailErrorMsgForAll] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let handleSendMailById = (studentEmail) => {
    const sendMailById = async (studentEmail) => {
      // setIsLoading(true);
      try {
        console.log(studentEmail);
        const respons = await sendEmailById(studentEmail);
        console.log(respons);
        setEmailDataForId(respons);
        setTimeout(() => {
          // setIsLoading(false);
          console.log(respons);
          toast.info(respons, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/services/emailservice");
        }, 2000);
        setTimeout(() => {
          setEmailDataForId("");
        }, 5000);
      } catch (error) {
        setEmailErrorMsgForId(error.response.data);
        setTimeout(() => {
          setIsLoading(false);
          console.log(error);
          toast.error(error.response.data, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/services/emailservice");
        }, 2000);
        setTimeout(() => {
          setEmailErrorMsgForId("");
        }, 5000);
      }
    };
    sendMailById(studentEmail);
  };
  const handleSendMailToAll = () => {
    const sendMailToAll = async () => {
      setIsLoading(true);
      try {
        const respons = await sendEmailToAll();
        console.log(respons + 2);
        setEmailDataForAll(respons);
        setTimeout(() => {
          setIsLoading(false);
          respons.map((r) => {
            console.log(r.body);
            toast.info(r.body, { position: toast.POSITION.TOP_RIGHT });
          });
          navigate("/services/emailservice");
        }, 2000);
        setTimeout(() => {
          setEmailDataForAll("");
        }, 5000);
      } catch (error) {
        setEmailErrorMsgForAll(error.message);
        setTimeout(() => {
          setIsLoading(false);
          console.log(error + 1);
          toast.error(error.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/services/emailservice");
        }, 2000);
        setTimeout(() => {
          setEmailErrorMsgForAll("");
        }, 5000);
      }
    };
    sendMailToAll();
  };
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const respons = await viewAllStudent();
      setData(respons);
      setTimeout(async () => {
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
  useEffect(() => {
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
              <h3 className="m-3">View All Student</h3>
            </div>
            <div className="m-4">
              <div>
                <div className="restApiMsg">{errorEmailMSgForAll}</div>
                <h6 className="restApiMsg">{errorEmailMSgForId}</h6>
                <div className="restApiMsg">
                  {Array.from(emailDataForAll).map((msg) => (
                    <li>{msg.body}</li>
                  ))}
                </div>
                <h6 className="restApiMsg">{emailDataForId}</h6>
              </div>
              <div className="m-3">
                <Button
                  variant="outline-info"
                  onClick={() => {
                    handleSendMailToAll();
                  }}
                >
                  Send Mail To All
                </Button>
              </div>
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Enrollment No.</th>
                    <th>Student Name</th>
                    <th>Mentor Name</th>
                    <th>University Name</th>
                    <th>Marks</th>
                    <th>Email Id</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((student) => (
                    <tr key={student.studentId}>
                      <td>{student.studentId}</td>
                      <td>{student.studentName}</td>
                      <td>{student.studentMentorName}</td>
                      <td>{student.studentUniversity}</td>
                      <td>{student.studentMark}</td>
                      <td>{student.studentEmail}</td>
                      <td>
                        <Button
                          onClick={() => {
                            handleSendMailById(student.studentEmail);
                          }}
                          variant="outline-primary"
                        >
                          Send Mail
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

export default ViewStudent;
