import React, { useEffect, useState } from "react";
import "../ServicesMain.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addStudent } from "../../../Services/AddStudent";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, error, success, info } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
function AddStudent() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [studentid, setStudentId] = useState("");
  const [studentname, setStudentName] = useState("");
  const [studentmarks, setStudentMarks] = useState("");
  const [studentemail, setStudentEmail] = useState("");
  const [studentmentorname, setStudentMentorName] = useState("");
  const [studentuniversityname, setStudentUniversityName] = useState("");
  const [errorMSg, setErrorMsg] = useState("Sorry ! Student Data Not Added...");
  const [isLoading, setIsLoading] = useState(false);
  const handleStudentId = (e) => {
    e.preventDefault();
    setStudentId(e.target.value);
  };
  const handleStudentMentorName = (e) => {
    e.preventDefault();
    setStudentMentorName(e.target.value);
  };
  const handleStudentUniversityName = (e) => {
    e.preventDefault();
    setStudentUniversityName(e.target.value);
  };
  const handleStudentName = (e) => {
    e.preventDefault();
    setStudentName(e.target.value);
  };
  const handleStudentMarks = (e) => {
    e.preventDefault();
    setStudentMarks(e.target.value);
  };
  const handleStudentEmail = (e) => {
    e.preventDefault();
    setStudentEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        console.log(
          studentid,
          studentname,
          studentmarks,
          studentemail,
          studentmentorname,
          studentuniversityname
        );
        const respons = await addStudent(
          studentid,
          studentname,
          studentmarks,
          studentemail,
          studentmentorname,
          studentuniversityname
        );
        console.log(respons);
        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          // alert("Data Added Successfully....");
          toast.info("Data Added Successfully....", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }, 2000);
        console.log(data);
        navigate("/services/emailservice");
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
        setTimeout(() => {
          setIsLoading(false);
          // alert(errorMSg);
          toast.info(error.message, { position: toast.POSITION.TOP_RIGHT });
        }, 2000);
      }
    };
    fetchData();
    console.log(errorMSg);
  };

  useEffect(() => {}, []);

  $(document).ready(function () {
    $(".studentNameInput").keypress(function (e) {
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
    $(".studentMentorNameInput").keypress(function (e) {
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
    $(".studentUniversityNameInput").keypress(function (e) {
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
    $(".studentIdInput").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        $(".error").html("Please Enter Number Only...").stop().show();
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".studentMarkInput").keypress(function (e) {
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
              <h3 className="m-5">Add Student</h3>
            </div>
            <h6 className="error"></h6>
            <div>
              <Form onSubmit={handleSubmit} style={{ padding: "20px 0px" }}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentId"
                >
                  <Form.Label column sm="4">
                    Student Enrollment No. :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="studentId"
                      minLength={12}
                      maxLength={12}
                      className="studentIdInput"
                      placeholder="190170116075"
                      onChange={(e) => {
                        handleStudentId(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentName"
                >
                  <Form.Label column sm="4">
                    Student Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="studentName"
                      className="studentNameInput"
                      placeholder="Divyesh Variya"
                      maxLength={50}
                      onChange={(e) => {
                        handleStudentName(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentMentorName"
                >
                  <Form.Label column sm="4">
                    Mentor Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="studentMentorName"
                      className="studentMentorNameInput"
                      placeholder="Jashwant Dave"
                      maxLength={50}
                      onChange={(e) => {
                        handleStudentMentorName(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentUniversity"
                >
                  <Form.Label column sm="4">
                    University Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="studentUniversity"
                      className="studentUniversityNameInput"
                      maxLength={50}
                      placeholder="GTU"
                      onChange={(e) => {
                        handleStudentUniversityName(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentMark"
                >
                  <Form.Label column sm="4">
                    Test Marks :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="number"
                      name="studentMark"
                      min={0}
                      max={100}
                      className="studentMarkInput"
                      placeholder="100"
                      onChange={(e) => {
                        handleStudentMarks(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentEmail"
                >
                  <Form.Label column sm="4">
                    Email address :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="email"
                      name="studentEmail"
                      placeholder="name@example.com"
                      onChange={(e) => {
                        handleStudentEmail(e);
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
                      navigate("/services/emailservice");
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

export default AddStudent;

// const frm = useFormik({
//   initialValues: {
//     studentId: "",
//     studentName: "",
//     marks: "",
//     email: "",
//     contactNo: "",
//   },
//   onSubmit: (event) => {
//     // event.prevantDefault();
//     console.log(frm.values.studentId);
//     console.log(frm.values.studentName);
//     console.log(frm.values.marks);
//     console.log(frm.values.email);
//     console.log(frm.values.contactNo);
//     console.log(frm.values);
//     // alert(`The name you entered was: ${frm.values.name}`);
// const fetchData = async () => {
//   try {
//     const respons = await addStudent(
//       frm.values.studentId,
//       frm.values.studentName,
//       frm.values.marks,
//       frm.values.email,
//       frm.values.contactNo
//     );
//     // const srcForImage = URL.createObjectURL(foods)
//     console.log(respons);
//     // console.log(srcForImage);
//     setData(respons);
//     alert("Data Added Successfully....");
//     // console.log(data);
//   } catch (error) {
//     console.log(error);
//     setErrorMsg(error);
//     alert(errorMSg);
//   }
// };
// fetchData();
// console.log(errorMSg);
//     navigate("/services/emailservice/viewstudent")
//   },
// });
